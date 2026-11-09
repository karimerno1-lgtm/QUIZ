export interface ShareDataPayload {
  quizTitle: string;
  quizSlug: string;
  scoreOrOutcome: string;
  summaryText: string;
  url: string;
}

/**
 * Builds the official WhatsApp sharing URL with prefilled text and link.
 */
export function getWhatsAppShareUrl(payload: ShareDataPayload): string {
  const text = `🎯 I just scored "${payload.scoreOrOutcome}" on the "${payload.quizTitle}" on Quizora!\n\nCan you beat my score? Take the quiz here:\n${payload.url}`;
  return `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
}

/**
 * Builds the official Facebook sharer URL.
 */
export function getFacebookShareUrl(payload: ShareDataPayload): string {
  return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(payload.url)}`;
}

/**
 * Builds a Twitter / X share intent URL.
 */
export function getTwitterShareUrl(payload: ShareDataPayload): string {
  const text = `I just got "${payload.scoreOrOutcome}" on "${payload.quizTitle}" on Quizora! Discover your score or challenge your friends:`;
  return `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(payload.url)}&hashtags=Quizora,QuizChallenge`;
}

/**
 * Generates formatted caption text for Instagram, TikTok, or messaging apps.
 */
export function getShareCaptionText(payload: ShareDataPayload): string {
  return `🎯 Quizora Result: ${payload.scoreOrOutcome}\n📖 Quiz: ${payload.quizTitle}\n\n"${payload.summaryText}"\n\nThink you know better? Take the challenge at: ${payload.url}\n#Quizora #QuizChallenge #DiscoverYourself`;
}

/**
 * Triggers native Web Share API if available, returning true if successful or false if fallback needed.
 */
export async function shareNative(payload: ShareDataPayload): Promise<boolean> {
  if (typeof navigator !== 'undefined' && navigator.share) {
    try {
      await navigator.share({
        title: `${payload.quizTitle} – Quizora`,
        text: `I just achieved "${payload.scoreOrOutcome}" on Quizora! Can you beat me?`,
        url: payload.url
      });
      return true;
    } catch (err: unknown) {
      if ((err as Error)?.name === 'AbortError') {
        return true; // User cancelled, not an error
      }
      return false;
    }
  }
  return false;
}

/**
 * Copies text safely to clipboard with fallback.
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  if (typeof navigator !== 'undefined' && navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Fallback
    }
  }

  try {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    const successful = document.execCommand('copy');
    document.body.removeChild(textArea);
    return successful;
  } catch {
    return false;
  }
}
