"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const grammy_1 = require("grammy");
require("dotenv/config");
const bot = new grammy_1.Bot(process.env.API_KEY || "");
bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));
bot.on("message", (ctx) => ctx.reply("Got another message!"));
bot.start();
