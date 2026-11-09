import React, { useRef, useEffect, useState } from 'react';
import { Download, Copy, Check, Sparkles, Smartphone, Square } from 'lucide-react';
import { copyToClipboard } from '../lib/sharing';

interface ResultImageProps {
  quizTitle: string;
  categoryName: string;
  scoreOrOutcome: string;
  subtitle: string;
  summary: string;
  isKnowledge: boolean;
  scorePercent?: number;
  onClose?: () => void;
}

export const ResultImage: React.FC<ResultImageProps> = ({
  quizTitle,
  categoryName,
  scoreOrOutcome,
  subtitle,
  summary,
  isKnowledge,
  scorePercent
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [format, setFormat] = useState<'square' | 'story'>('square');
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    drawCanvas();
  }, [format, quizTitle, scoreOrOutcome, subtitle, summary, isKnowledge, scorePercent]);

  const drawCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = 1080;
    const height = format === 'square' ? 1080 : 1920;
    canvas.width = width;
    canvas.height = height;

    // 1. Rich Gradient Background
    const bgGradient = ctx.createLinearGradient(0, 0, width, height);
    if (isKnowledge) {
      bgGradient.addColorStop(0, '#0f172a'); // slate-900
      bgGradient.addColorStop(0.5, '#022c22'); // dark teal
      bgGradient.addColorStop(1, '#090d16');
    } else {
      bgGradient.addColorStop(0, '#0f172a');
      bgGradient.addColorStop(0.5, '#2e1065'); // dark purple
      bgGradient.addColorStop(1, '#090d16');
    }
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, width, height);

    // Decorative ambient circles
    const rad1 = ctx.createRadialGradient(200, 250, 10, 200, 250, 450);
    rad1.addColorStop(0, isKnowledge ? 'rgba(20, 184, 166, 0.25)' : 'rgba(168, 85, 247, 0.25)');
    rad1.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = rad1;
    ctx.beginPath();
    ctx.arc(200, 250, 450, 0, Math.PI * 2);
    ctx.fill();

    const rad2 = ctx.createRadialGradient(880, height - 300, 10, 880, height - 300, 500);
    rad2.addColorStop(0, isKnowledge ? 'rgba(56, 189, 248, 0.2)' : 'rgba(236, 72, 153, 0.2)');
    rad2.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = rad2;
    ctx.beginPath();
    ctx.arc(880, height - 300, 500, 0, Math.PI * 2);
    ctx.fill();

    // 2. Glassmorphic Card Container
    const cardMarginX = 80;
    const cardMarginY = format === 'square' ? 90 : 220;
    const cardWidth = width - cardMarginX * 2;
    const cardHeight = height - cardMarginY * 2;
    const cardRadius = 40;

    ctx.save();
    roundRect(ctx, cardMarginX, cardMarginY, cardWidth, cardHeight, cardRadius);
    ctx.fillStyle = 'rgba(15, 23, 42, 0.75)';
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = isKnowledge ? 'rgba(45, 212, 191, 0.3)' : 'rgba(192, 132, 252, 0.3)';
    ctx.stroke();
    ctx.restore();

    // 3. Brand Header Inside Card
    const headerY = cardMarginY + 80;

    // Logo Icon Box
    const logoX = cardMarginX + 60;
    const logoSize = 64;
    ctx.save();
    roundRect(ctx, logoX, headerY - 45, logoSize, logoSize, 18);
    const logoGrad = ctx.createLinearGradient(logoX, headerY - 45, logoX + logoSize, headerY - 45 + logoSize);
    logoGrad.addColorStop(0, '#6366f1');
    logoGrad.addColorStop(0.5, '#8b5cf6');
    logoGrad.addColorStop(1, '#ec4899');
    ctx.fillStyle = logoGrad;
    ctx.fill();

    // White "Q" on logo
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 36px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Q', logoX + logoSize / 2, headerY - 45 + logoSize / 2 + 2);
    ctx.restore();

    // Brand Name & Tagline
    ctx.textAlign = 'left';
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 44px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('Quizora', logoX + logoSize + 24, headerY - 14);

    ctx.fillStyle = '#94a3b8'; // slate-400
    ctx.font = '500 22px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('Discover. Challenge. Share.', logoX + logoSize + 24, headerY + 18);

    // Category Kicker
    ctx.textAlign = 'right';
    ctx.fillStyle = isKnowledge ? '#2dd4bf' : '#c084fc';
    ctx.font = 'bold 24px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(categoryName.toUpperCase(), cardMarginX + cardWidth - 60, headerY);

    // Hairline Divider
    ctx.beginPath();
    ctx.moveTo(cardMarginX + 60, headerY + 55);
    ctx.lineTo(cardMarginX + cardWidth - 60, headerY + 55);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // 4. Quiz Title
    const titleY = headerY + 125;
    ctx.textAlign = 'center';
    ctx.fillStyle = '#f8fafc';
    ctx.font = 'bold 42px "Plus Jakarta Sans", sans-serif';
    wrapText(ctx, `"${quizTitle}"`, width / 2, titleY, cardWidth - 120, 52);

    // 5. Hero Result Badge / Score Block
    const badgeCenterY = format === 'square' ? cardMarginY + 470 : cardMarginY + 680;

    if (isKnowledge && scorePercent !== undefined) {
      // Knowledge Score Big Circle
      const circleRadius = format === 'square' ? 120 : 150;
      ctx.save();
      ctx.beginPath();
      ctx.arc(width / 2, badgeCenterY, circleRadius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(20, 184, 166, 0.15)';
      ctx.fill();
      ctx.lineWidth = 6;
      ctx.strokeStyle = '#14b8a6';
      ctx.stroke();

      // Big Percentage
      ctx.fillStyle = '#ffffff';
      ctx.font = `bold ${format === 'square' ? '76px' : '92px'} "Plus Jakarta Sans", sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(`${scorePercent}%`, width / 2, badgeCenterY - 15);

      // Score Label
      ctx.fillStyle = '#2dd4bf';
      ctx.font = 'bold 22px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('OFFICIAL SCORE', width / 2, badgeCenterY + 45);
      ctx.restore();
    } else {
      // Personality Archetype Shield Badge
      const badgeW = cardWidth - 160;
      const badgeH = 140;
      const badgeX = width / 2 - badgeW / 2;
      const badgeY = badgeCenterY - badgeH / 2;

      ctx.save();
      roundRect(ctx, badgeX, badgeY, badgeW, badgeH, 24);
      ctx.fillStyle = 'rgba(168, 85, 247, 0.15)';
      ctx.fill();
      ctx.strokeStyle = '#c084fc';
      ctx.lineWidth = 3;
      ctx.stroke();

      ctx.fillStyle = '#e2e8f0';
      ctx.font = '600 24px "Plus Jakarta Sans", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('MY ARCHETYPE RESULT', width / 2, badgeY + 42);

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 44px "Plus Jakarta Sans", sans-serif';
      ctx.fillText(scoreOrOutcome, width / 2, badgeY + 98);
      ctx.restore();
    }

    // 6. Subtitle & Result Title
    const subTitleY = format === 'square' ? badgeCenterY + 165 : badgeCenterY + 230;
    ctx.textAlign = 'center';
    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 36px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(isKnowledge ? scoreOrOutcome : subtitle, width / 2, subTitleY);

    // 7. Summary Prose Description
    const summaryY = subTitleY + 60;
    ctx.fillStyle = '#cbd5e1';
    ctx.font = '400 28px "Plus Jakarta Sans", sans-serif';
    wrapText(ctx, summary, width / 2, summaryY, cardWidth - 160, 42, 3);

    // 8. Footer Call-to-Action & Watermark
    const footerY = cardMarginY + cardHeight - 65;

    // Challenge Banner Line
    ctx.beginPath();
    ctx.moveTo(cardMarginX + 60, footerY - 50);
    ctx.lineTo(cardMarginX + cardWidth - 60, footerY - 50);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.fillStyle = '#94a3b8';
    ctx.font = '600 24px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('Can you beat my score? Challenge me on:', cardMarginX + 60, footerY);

    ctx.textAlign = 'right';
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 28px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('quiz.wdbloog.com', cardMarginX + cardWidth - 60, footerY);
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    setDownloading(true);
    try {
      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = `quizora-${format}-${Date.now()}.png`;
      link.href = dataUrl;
      link.click();
    } finally {
      setTimeout(() => setDownloading(false), 500);
    }
  };

  const handleCopyImage = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    try {
      canvas.toBlob(async (blob) => {
        if (!blob) return;
        if (navigator.clipboard && window.ClipboardItem) {
          try {
            await navigator.clipboard.write([
              new ClipboardItem({ 'image/png': blob })
            ]);
            setCopied(true);
            setTimeout(() => setCopied(false), 2500);
          } catch {
            // Fallback to text copy
            await copyToClipboard(`I just scored ${scoreOrOutcome} on ${quizTitle} on Quizora! Try it at: https://quiz.wdbloog.com`);
            setCopied(true);
            setTimeout(() => setCopied(false), 2500);
          }
        }
      });
    } catch {
      // Ignored
    }
  };

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-2xl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div>
          <h3 className="text-lg font-bold flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-400" />
            Social Result Card Generator
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Branded high-resolution card optimized for Instagram, TikTok, WhatsApp & Facebook.
          </p>
        </div>

        {/* Format Selector */}
        <div className="flex items-center gap-1 bg-slate-800 p-1 rounded-lg border border-slate-700">
          <button
            onClick={() => setFormat('square')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
              format === 'square' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Square className="w-3.5 h-3.5" />
            Square (1080×1080)
          </button>
          <button
            onClick={() => setFormat('story')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
              format === 'story' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            Story / TikTok (9:16)
          </button>
        </div>
      </div>

      {/* Canvas Preview Container */}
      <div className="relative flex justify-center bg-slate-950/70 p-4 rounded-xl border border-slate-800/80 overflow-hidden mb-6">
        <canvas
          ref={canvasRef}
          className={`max-w-full rounded-lg shadow-xl object-contain ${
            format === 'square' ? 'max-h-[380px] aspect-square' : 'max-h-[460px] aspect-[9/16]'
          }`}
        />
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="text-xs text-slate-400">
          Target domain: <span className="text-slate-200 font-mono">quiz.wdbloog.com</span>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={handleCopyImage}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors border border-slate-700"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            {copied ? 'Copied!' : 'Copy Card'}
          </button>

          <button
            onClick={handleDownload}
            disabled={downloading}
            className="flex items-center gap-2 px-5 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-md hover:shadow-indigo-500/25 transition-all"
          >
            <Download className="w-4 h-4" />
            {downloading ? 'Exporting...' : 'Download PNG'}
          </button>
        </div>
      </div>
    </div>
  );
};

// Canvas Helper: Rounded Rectangle
function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number
) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

// Canvas Helper: Multi-line text wrapper
function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number,
  maxLines = 4
) {
  const words = text.split(' ');
  let line = '';
  let lineCount = 0;

  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + ' ';
    const metrics = ctx.measureText(testLine);
    const testWidth = metrics.width;

    if (testWidth > maxWidth && n > 0) {
      if (lineCount < maxLines - 1) {
        ctx.fillText(line.trim(), x, y);
        line = words[n] + ' ';
        y += lineHeight;
        lineCount++;
      } else {
        // Last line truncation
        ctx.fillText((line + words[n] + '...').trim(), x, y);
        return;
      }
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line.trim(), x, y);
}
