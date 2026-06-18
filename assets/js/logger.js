export class Logger {
  static info(msg, data) {
    console.log("[BennaNET:INFO]", msg, data || "");
  }

  static warn(msg, data) {
    console.warn("[BennaNET:WARN]", msg, data || "");
  }

  static error(msg, err) {
    console.error("[BennaNET:ERROR]", msg, err || "");
  }
}
