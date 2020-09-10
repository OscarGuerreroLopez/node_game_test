import * as redis from "redis";
import { EnvVars } from "./validateEnv";

export const RedisClient = redis.createClient({
  host: EnvVars.REDIS_HOST,
  port: EnvVars.REDIS_PORT,
  enable_offline_queue: false,
});

RedisClient.on("connect", () => {
  console.log("Redis client connected for BolierPlate");
});

RedisClient.on("error", (err: any) => {
  console.log("Error connecting to Redis from BolierPlate", { data: err });
  process.exit(1);
});
