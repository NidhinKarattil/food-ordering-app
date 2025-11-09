export const formatRouteError = (error: unknown): string => {
  if (error && typeof error === "object") {
    const hasMessage = "message" in error;
    const hasStatus = "status" in error;
    if (hasMessage && hasStatus) {
      return `${error.status} - ${error.message}`;
    }
    if (hasMessage) {
      return (error as { message: string }).message;
    }
    return "An unexpected error occurred";
  }

  if (error instanceof Error) {
    return error.message;
  }

  if (typeof error === "string") {
    return error;
  }
  return "An unexpected error occurred";
};
