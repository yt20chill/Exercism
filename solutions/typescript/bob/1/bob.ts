class Msg {
  isQuestion;
  isYell;
  isSilence;
  constructor(message:string) {
    this.isQuestion = message.trim().endsWith("?");
    this.isYell = message.toUpperCase() === message && message.search(/[a-zA-Z]/) !== -1;
    this.isSilence = message.trim().length === 0;
  }
}

export function hey(message: string): string {
  const msg = new Msg(message);
  if (msg.isSilence) return `Fine. Be that way!`;
  if (msg.isQuestion && !msg.isYell) return `Sure.`
  if (!msg.isQuestion && msg.isYell) return `Whoa, chill out!`
  if (msg.isQuestion && msg.isYell) return `Calm down, I know what I'm doing!`;
  return `Whatever.`
}
