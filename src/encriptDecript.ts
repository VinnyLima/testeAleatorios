import crypto from "crypto";

export const createHashString = (value: string) =>
  crypto.createHash("sha256").update(value).digest("hex");
