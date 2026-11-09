import React, { useState } from 'react';
import {
  Share2,
  Copy,
  Check,
  MessageCircle,
  Facebook,
  Instagram,
  Video,
  Send
} from 'lucide-react';
import {
  ShareDataPayload,
  getWhatsAppShareUrl,
  getFacebookShareUrl,
  getTwitterShareUrl,
  getShareCaptionText,
  shareNative,
  copyToClipboard
} from '../lib/sharing';

interface ShareButtonsProps {
  payload: ShareDataPayload;
  onOpenCanvasModal?: () => void;
  onOpenChallengeModal?: () => void;
}

export const ShareButtons: React.FC<ShareButtonsProps> = ({
  payload,
  onOpenCanvasModal,
  onOpenChallengeModal
}) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedCaption, setCopiedCaption] = useState(false);
  const [showTikTokGuide, setShowTikTokGuide] = useState(false);

  const handleCopyLink = async () => {
    const success = await copyToClipboard(payload.url);
    if (success) {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const handleCopyCaption = async () => {
    const caption = getShareCaptionText(payload);
    const success = await copyToClipboard(caption);
    if (success) {
      setCopiedCaption(true);
      setTimeout(() => setCopiedCaption(false), 2000);
    }
  };

  const handleNativeShare = async () => {
    const shared = await shareNative(payload);
    if (!shared) {
      handleCopyLink();
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
        {/* WhatsApp */}
        <a
          href={getWhatsAppShareUrl(payload)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs sm:text-sm shadow-sm transition-all hover:-translate-y-0.5"
          title="Share to WhatsApp"
        >
          <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
          <span>WhatsApp</span>
        </a>

        {/* Facebook */}
        <a
          href={getFacebookShareUrl(payload)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs sm:text-sm shadow-sm transition-all hover:-translate-y-0.5"
          title="Share on Facebook"
        >
          <Facebook className="w-4 h-4 fill-white text-blue-600" />
          <span>Facebook</span>
        </a>

        {/* Instagram / Story Card */}
        <button
          onClick={onOpenCanvasModal}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-95 text-white font-medium text-xs sm:text-sm shadow-sm transition-all hover:-translate-y-0.5"
          title="Generate Instagram Story / Square Card"
        >
          <Instagram className="w-4 h-4 text-white" />
          <span>Instagram Card</span>
        </button>

        {/* TikTok Guide */}
        <button
          onClick={() => setShowTikTokGuide(true)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white font-medium text-xs sm:text-sm border border-slate-700 transition-all hover:-translate-y-0.5"
          title="TikTok Sharing Instructions"
        >
          <Video className="w-4 h-4 text-pink-400" />
          <span>TikTok Guide</span>
        </button>

        {/* Challenge a Friend Trigger */}
        {onOpenChallengeModal && (
          <button
            onClick={onOpenChallengeModal}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs sm:text-sm shadow-sm transition-all hover:-translate-y-0.5"
            title="Challenge Friends with Custom Link"
          >
            <Send className="w-4 h-4 text-white" />
            <span>Challenge a Friend</span>
          </button>
        )}

        {/* Web Share / Copy Link */}
        <button
          onClick={handleNativeShare}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-medium text-xs sm:text-sm transition-all hover:-translate-y-0.5"
          title="Share via Device or Copy Link"
        >
          <Share2 className="w-4 h-4" />
          <span>Share</span>
        </button>

        <button
          onClick={handleCopyLink}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 hover:border-slate-400 text-slate-800 dark:text-slate-200 font-medium text-xs sm:text-sm transition-all"
          title="Copy Quiz URL"
        >
          {copiedLink ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
          <span>{copiedLink ? 'Copied Link!' : 'Copy Link'}</span>
        </button>
      </div>

      {/* TikTok Instructions Modal */}
      {showTikTokGuide && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in"
        >
          <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-md w-full p-6 border border-slate-200 dark:border-slate-800 shadow-2xl relative text-left">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2">
              <Video className="w-5 h-5 text-pink-500" />
              How to Share on TikTok
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">
              Follow these simple steps to post your Quizora result to TikTok Photo Mode or TikTok Stories:
            </p>

            <ol className="space-y-3 text-xs text-slate-700 dark:text-slate-300 mb-6">
              <li className="flex items-start gap-2.5">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-pink-100 dark:bg-pink-950/60 text-pink-600 dark:text-pink-400 font-bold flex items-center justify-center text-[11px]">
                  1
                </span>
                <span>
                  Click <strong>&quot;Instagram Card&quot;</strong> and select <strong>Story / TikTok (9:16)</strong> format, then click <strong>Download PNG</strong>.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-pink-100 dark:bg-pink-950/60 text-pink-600 dark:text-pink-400 font-bold flex items-center justify-center text-[11px]">
                  2
                </span>
                <span>
                  Open the <strong>TikTok app</strong>, tap the <strong>+</strong> button, and choose <strong>Upload</strong>. Select your downloaded Quizora result card.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-pink-100 dark:bg-pink-950/60 text-pink-600 dark:text-pink-400 font-bold flex items-center justify-center text-[11px]">
                  3
                </span>
                <span>
                  Paste the pre-formatted caption below and tag your friends to challenge them!
                </span>
              </li>
            </ol>

            {/* Copy Caption Box */}
            <div className="bg-slate-100 dark:bg-slate-950 p-3 rounded-xl border border-slate-200 dark:border-slate-800 mb-4">
              <div className="text-[11px] font-mono text-slate-600 dark:text-slate-400 whitespace-pre-line line-clamp-3 mb-2">
                {getShareCaptionText(payload)}
              </div>
              <button
                onClick={handleCopyCaption}
                className="w-full py-1.5 px-3 bg-pink-600 hover:bg-pink-500 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
              >
                {copiedCaption ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                {copiedCaption ? 'Caption Copied!' : 'Copy TikTok Caption'}
              </button>
            </div>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowTikTokGuide(false)}
                className="px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              >
                Got It
              </button>
              {onOpenCanvasModal && (
                <button
                  onClick={() => {
                    setShowTikTokGuide(false);
                    onOpenCanvasModal();
                  }}
                  className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors"
                >
                  Download Story Image
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
