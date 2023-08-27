import { Request, Response } from "express";
import logger from "../../main/logger";
import { UseCaseError } from "../../application/errors/UseCaseError";

export abstract class BaseController {
  protected abstract executeImpl(req: Request, res: Response): Promise<Response>;

  public async execute(req: Request, res: Response): Promise<Response> {
    try {
      return await this.executeImpl(req, res);
    } catch (err) { 
      logger.error("[BaseController]: Uncaught controller error", err);
      return this.fail(res, "An unexpected error occurred");
    }
  }

  public ok<T>(res: Response, dto?: T): Response {
    if (dto) {
      res.type("application/json");
      return res.status(200).json({
        success: true,
        ...dto,
      });
    } else {
      return res.sendStatus(200);
    }
  }

  public fail(res: Response, error: UseCaseError | Error | string): Response {
    logger.error(error);
    if (error instanceof UseCaseError) {
      return res.status(error.statusCode).json(this.errorToJson(error));
    }
    return res.status(500).json(this.errorToJson(error));
  }

  private errorToJson(error: UseCaseError | Error | string) { 
    if (error instanceof UseCaseError) { 
      return {
        success: false,
        errors: error.errors,
        message: typeof error.errors === "object"
          ? Object.values(error.errors).join(", ")
          : error.errors.toString()
      };
    }
    return {
      success: false,
      message: error.toString()
    };
  }
}