import logger from "../../main/logger";
import { Result } from "../usecases/Result";
import { UseCaseError } from "./UseCaseError";

export class UnexpectedError extends Result<UseCaseError> {
  public constructor(err: unknown) {
    super(false, new UseCaseError({
      message: "An unexpected error occurred.",
      error: err,
    }));
    logger.error("[AppError]: An unexpected error occurred", err);
  }

  public static create(err: unknown): UnexpectedError {
    return new UnexpectedError(err);
  }
}