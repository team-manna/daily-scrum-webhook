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
      "지금은 1차 마켓 리처치 기간입니다 ! (2024.01.08 ~ 2024.01.21)",
      "✅ ‘밤편지’와 유사한 어플만 조사하는게 아니라, 더 넓은 관점에서 다양하게 많이 많이 조사해야 해주세요 !\n✅ 우리 서비스가 현재 가진 대화 기반 컨텐츠를 통해서 무엇을 이룰 것이며 어떤 차별점을 가질 수 있는지 생각해주세요 !"
    );

  hook.send(embed);
}

sendMessage();
