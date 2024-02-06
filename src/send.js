import "dotenv/config";
import { Webhook, MessageBuilder } from "discord-webhook-node";

const hook = new Webhook(process.env.WEBHOOK_URL);

async function sendMessage() {
  const embed = new MessageBuilder()
    .setTitle("❤️ 만나팀 모두 오늘 하루도 화이팅 ❤️")
    .setColor("#ffd400")
    .setDescription(
      "지금은 2차 파일럿 프로그램 개발 기간입니다."
    )
    .addField(
      "✅ 액션아이템 채널에 [우리 팀원들이 몽글에 담고 싶은 가치]를 생각해서 적어주세요 !"
    );
  hook.send(embed);
}

sendMessage();
