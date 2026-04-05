/**
 * 채움농장 명품 수박 — 프리미엄 상세페이지 v2
 * 디자인 원칙: 여백의 고급감, 이미지 풀블리드, 2톤 컬러, 한 화면 한 메시지
 */

import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { ReactNode, Key } from 'react';

const FadeIn = ({ children, delay = 0, className = "" }: { children: ReactNode, delay?: number, className?: string, key?: Key }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#F5F1E8] py-0 sm:py-10">
      <main className="max-w-[760px] mx-auto bg-white shadow-2xl overflow-hidden text-zinc-900 font-sans relative">
        
        {/* SECTION 1: Hero */}
        <section className="relative bg-white pt-0 pb-20 overflow-hidden text-center">
          <div className="relative h-[420px] sm:h-[540px] w-full overflow-hidden">
            <img 
              src="/watermelon_detail_v2/Watermelon.png" 
              alt="수박 농장 배경" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-white"></div>
            <div className="absolute top-14 sm:top-24 left-0 w-full text-center z-10 flex flex-col items-center">
              <FadeIn>
                <p className="text-lg sm:text-xl font-medium text-white/90 mb-3 drop-shadow-md tracking-wide">
                  맑은 달콤함, 한입에 퍼지다
                </p>
                <img 
                  src="topcopy.png" 
                  alt="제철을 담아낸 진한 단맛" 
                  className="h-auto w-auto max-w-[85%] max-h-[110px] sm:max-h-[150px] object-contain drop-shadow-lg mx-auto"
                />
              </FadeIn>
            </div>
          </div>

         {/* Full-bleed Product Image */}
          <div className="relative z-20 -mt-20 w-full">
            <FadeIn delay={0.2}>
              <img 
                src="/watermelon_detail/Watermelonslice1.webp" 
                alt="프리미엄 수박" 
                className="w-full h-[350px] sm:h-[450px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
            </FadeIn>
          </div>

          <div className="relative z-30 mt-12 px-8">
            <FadeIn delay={0.3}>
              <p className="text-base tracking-widest text-[#4A7C2E] mb-4 font-medium">채움농장</p>
              <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-8 tracking-tight text-zinc-900">명품 수박</h2>
              <p className="text-lg text-zinc-600 font-medium mb-4">양구가 품을 내어주고, 채움농장에서 키운 꿀맛 수박</p>
              <p className="text-zinc-500 leading-relaxed max-w-md mx-auto break-keep">
                청정 고랭지에서 재배해 잔류농약 걱정 없이 즐기는 프리미엄 수박입니다. 
                한 통의 수박이 식탁에 오르기까지, 90일의 정성이 담깁니다.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* SECTION 2: Farmer Story */}
        <section className="relative bg-white pb-24">
          <FadeIn className="w-full">
            <div className="relative w-full h-[350px] sm:h-[450px] overflow-hidden">
              <img src="woman-farmer.jpg" alt="채움농장 농부" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-8 sm:p-10 text-left">
                <p className="text-white text-xl sm:text-2xl font-bold mb-2">정직한 땀방울로 키워냅니다</p>
                <p className="text-white/70 text-sm">채움농장 대표 농부</p>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="px-8 mt-12 max-w-lg mx-auto text-center">
              <p className="text-zinc-600 leading-relaxed break-keep">
                좋은 수박은 건강한 땅에서 시작됩니다. 
                채움농장은 수박의 단맛을 극대화하기 위해 직접 배합한 유기질 비료만을 고집합니다.
              </p>
            </div>
          </FadeIn>
        </section>

        {/* SECTION 3: Selection Tips */}
        <section className="py-24 px-8 bg-[#FAFAF5]">
          <FadeIn className="text-center mb-16">
            <p className="text-sm tracking-widest text-[#4A7C2E] mb-4 font-medium">수박 농부의 TIP</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">
              이런 수박이<br />좋은 수박입니다
            </h2>
          </FadeIn>
          <div className="max-w-md mx-auto space-y-8">
            {["줄무늬가 선명하고 대비가 뚜렷하다","꼭지가 싱싱하고 배꼽이 작다","두드렸을 때 맑은 통통 소리가 난다","묵직하고 타원형이 균일하다"].map((tip, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <p className="flex items-start gap-4 text-zinc-700">
                  <span className="text-[#4A7C2E] mt-0.5 shrink-0 font-bold">✓</span>
                  <span className="text-lg">{tip}</span>
                </p>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* SECTION 4: Cultivation */}
        <section className="relative bg-white overflow-hidden">
          <FadeIn className="w-full relative">
            <img src="watermelon%20field.jpg" alt="수박밭 전경" className="w-full h-[400px] sm:h-[520px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
          </FadeIn>
          <div className="relative z-10 px-8 pb-24 -mt-20">
            <FadeIn delay={0.1} className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight text-zinc-900">깐깐한 재배</h2>
              <p className="text-zinc-500 mb-8">다년간의 경험으로 습득한 노하우와 끈끈함으로</p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="max-w-lg mx-auto text-center">
                <p className="text-zinc-600 leading-relaxed break-keep">
                  채움농장은 강원도 양구의 깨끗한 환경에서 수박을 재배합니다.
                  씨앗 선별부터 정식, 수분, 적과까지 모든 과정을 농부의 손으로 직접 관리하며,
                  다년간 축적된 노하우로 당도 12Brix 이상의 프리미엄 수박만을 출하합니다.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* SECTION 5: Clean Origin + Brix (sole infographic) */}
        <section className="py-24 px-8 bg-white">
          <FadeIn className="text-center mb-6">
            <p className="text-zinc-500 text-lg mb-2">안심하고 드실 수 있는</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">우리 먹거리</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="max-w-lg mx-auto text-center mt-10">
              <p className="text-zinc-600 leading-relaxed break-keep">
                일교차가 크고 비옥한 토양을 가진 청정 양구에서 정성껏 재배합니다.
                해발 300m 이상의 고지대에서 자란 수박은 밤낮 온도차로 인해 
                당분이 응축되어 깊은 단맛을 자랑합니다.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2} className="mt-16">
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
              <div className="bg-zinc-50 rounded-2xl p-8 text-center">
                <p className="text-zinc-400 text-sm mb-2">일반 수박</p>
                <p className="text-3xl font-bold text-zinc-300 tracking-tight">9~10</p>
                <p className="text-zinc-400 text-xs mt-1">Brix</p>
              </div>
              <div className="bg-[#2D5016] rounded-2xl p-8 text-center">
                <p className="text-white/70 text-sm mb-2">채움농장</p>
                <p className="text-3xl font-bold text-white tracking-tight">12+</p>
                <p className="text-white/60 text-xs mt-1">Brix 보장</p>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* SECTION 6: Juicy Taste */}
        <section className="relative bg-white overflow-hidden">
          <FadeIn className="w-full relative">
            <img src="watermelon-splashing.jpg" alt="과즙 가득한 수박" className="w-full h-[380px] sm:h-[480px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
          </FadeIn>
          <div className="relative z-10 px-8 pb-24 -mt-16">
            <FadeIn delay={0.1} className="text-center">
              <p className="text-[#C8602A] text-base mb-3">과즙이 철철</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight text-zinc-900">명품 수박</h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="max-w-lg mx-auto text-center">
                <p className="text-zinc-600 leading-relaxed break-keep">
                  과육이 아삭하고 달콤하며 수박 향이 매우 진합니다.
                  큰 일교차가 셀룰로오스를 촘촘히 형성해 
                  무르지 않는 아삭한 식감을 완성합니다.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* SECTION 7: Texture */}
        <section className="relative bg-white overflow-hidden pb-24">
          <FadeIn className="w-full relative">
            <img src="watermelon-table.jpg" alt="아삭한 수박 조각" className="w-full h-[350px] sm:h-[450px] object-cover" />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
          </FadeIn>
          <div className="relative z-10 px-8 mt-8">
            <FadeIn delay={0.1} className="text-center">
              <h2 className="text-3xl font-bold mb-6 tracking-tight text-zinc-900">아삭아삭, 식감까지 완벽</h2>
              <p className="text-zinc-500 max-w-md mx-auto break-keep">
                섬세한 조직이 주는 경쾌한 한입. 
                낮과 밤의 큰 일교차가 과육을 단단하게 만들어줍니다.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* SECTION 8: Health Benefits */}
        <section className="py-24 px-8 bg-[#FAFAF5]">
          <FadeIn className="text-center mb-14">
            <p className="text-sm tracking-widest text-[#4A7C2E] mb-4 font-medium">채움농장이 들려드리는</p>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">수박이 좋은 이유</h2>
          </FadeIn>
          <div className="max-w-md mx-auto space-y-6">
            {[
              "92%의 풍부한 수분으로 여름철 갈증을 빠르게 해소합니다.",
              "토마토보다 풍부한 라이코펜이 항산화 및 심혈관 건강을 돕습니다.",
              "시트룰린 성분이 혈관을 이완시켜 운동 후 피로를 완화합니다."
            ].map((benefit, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <p className="flex items-start gap-4 text-zinc-600 break-keep">
                  <span className="text-[#4A7C2E] mt-0.5 shrink-0 font-bold">✓</span>
                  <span>{benefit}</span>
                </p>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* SECTION 9: Tips */}
        <section className="py-24 px-8 bg-white">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-3 tracking-tight text-zinc-900">신선함을 오래 즐기는 법</h2>
          </FadeIn>
          <div className="max-w-sm mx-auto space-y-10">
            {[
              { step: "Step 1", title: "예비 숙성", desc: "서늘한 곳에서 하루 숙성 후 냉장 보관하세요." },
              { step: "Step 2", title: "커팅 보관", desc: "4~6등분으로 잘라 밀폐 용기에 보관하세요." },
              { step: "Step 3", title: "시원하게 서빙", desc: "차갑게 식힌 뒤 바로 꺼내 즐기세요." }
            ].map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="text-center">
                  <p className="text-sm text-[#4A7C2E] font-medium mb-2">{item.step}</p>
                  <p className="text-xl font-bold text-zinc-900 mb-2">{item.title}</p>
                  <p className="text-zinc-500 break-keep">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* SECTION 10: Shipping & Footer (sole dark section) */}
        <section className="py-20 px-8 bg-[#1A1A16] text-zinc-400 text-sm">
          <FadeIn className="text-center mb-14">
            <h2 className="text-2xl font-bold text-white tracking-tight mb-3">정직한 배송</h2>
            <p className="text-zinc-500">농장에서 식탁까지, 가장 신선한 상태로 보내드립니다</p>
          </FadeIn>
          <div className="max-w-sm mx-auto space-y-6 mb-14">
            {[
              "주문 후 수확하여 당일 포장, 당일 발송을 원칙으로 합니다.",
              "개별 완충 포장으로 배송 중 파손을 방지하며, 파손 시 100% 재발송합니다.",
              "표기 중량 이상을 보장하며, 저울 인증샷과 함께 발송합니다."
            ].map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <p className="flex items-start gap-4 break-keep">
                  <span className="text-[#4A7C2E] mt-0.5 shrink-0">✓</span>
                  <span>{item}</span>
                </p>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3}>
            <div className="text-center">
              <button className="bg-[#4A7C2E] hover:bg-[#3A6224] text-white font-bold py-4 px-12 rounded-full text-lg transition-colors">
                지금 주문하기
              </button>
            </div>
          </FadeIn>
          <div className="pt-10 mt-10 border-t border-zinc-800 text-center flex flex-col items-center gap-2">
            <div className="flex items-center gap-2 text-zinc-500">
              <CheckCircle2 size={14} />
              <span>품질 보증 100% 안심 환불제 운영</span>
            </div>
            <p className="text-xs text-zinc-600 mt-3">© 2026 채움농장. All rights reserved.</p>
          </div>
        </section>

      </main>
    </div>
  );
}
