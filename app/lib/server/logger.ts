export function logRequest(message: string, context?: Record<string, unknown>) {
  console.info(`[request] ${message}`, context ?? {});
}

export function logError(message: string, context?: Record<string, unknown>) {
  console.error(`[error] ${message}`, context ?? {});
}

export function logAudit(action: string, actor: string, metadata?: Record<string, unknown>) {
  console.info(`[audit] ${action} by ${actor}`, metadata ?? {});
}
