import { ProxyEventType } from "shared/types/main.ts";
import { ProxyEvent } from "shared/enums/main.ts";
import { Server } from "modules/server/main.ts";
import { log, getRandomNumberFromSeed } from "shared/utils/main.ts";

export const messageEvent: ProxyEventType<{ message: string }> = {
  event: ProxyEvent.MESSAGE,
  func: async ({ user, data: { message } }) => {
    log("message", message, "room");
    const room = Server.rooms.getUserRoom(user);
    if (!room) return;

    Server.proxy.emitRoom({
      roomId: room.id,
      event: ProxyEvent.MESSAGE,
      data: {
        userId: user.id,
        message,
        color: await getRandomNumberFromSeed(user.username),
      },
    });
  },
};