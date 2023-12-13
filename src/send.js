import "dotenv/config";
import { Webhook, MessageBuilder } from "discord-webhook-node";

const hook = new Webhook(process.env.WEBHOOK_URL);

async function sendMessage() {
  const embed = new MessageBuilder()
    .setTitle("🚨 데일리스크럼 알림 🚨")
    .setColor("#00ff00")
    .setDescription(
      "🌞 굿모닝 좋은 아침 🌞\n💪 모두들 데일리 스크럼 작성해주세요 !"
    )
    .addField(
      "유의사항",
      "✅ 한 일, 할 일, 문제 상황을 적어주세요!\n✅ 오늘 오후 6시 이전까지 모두 올려주세요!"
    );

  hook.send(embed);
}

sendMessage();