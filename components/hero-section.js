import { Card } from "./ui/card";
import { Heart, Shield, Clock, Award } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-background via-card/30 to-muted/20 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-right space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-serif font-bold text-foreground leading-tight">
                مختبر الأقصى الطبي
              </h1>
              <h2 className="text-2xl lg:text-3xl text-primary font-medium">
                دقتنا هي ثقتكم
              </h2>
            </div>

            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
              نقدم أحدث الفحوصات الطبية بأعلى معايير الجودة والدقة. مع فريق من
              الخبراء المتخصصين وأحدث التقنيات الطبية.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                استكشف خدماتنا
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 border border-border bg-background/50 backdrop-blur-sm text-foreground rounded-xl font-medium hover:bg-muted/50 transition-all duration-300"
              >
                تعرف علينا أكثر
              </Link>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-card to-muted/50 rounded-3xl p-8 shadow-2xl">
              <img
                src="/medical-lab-equipment.png"
                alt="مختبر الأقصى الطبي"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            {/* Floating Cards */}
            <Card className="absolute -top-6 -right-6 p-5 bg-background/95 backdrop-blur-sm shadow-xl border-0 ring-1 ring-border/50">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div className="text-right">
                  <p className="font-semibold text-base">فحوصات شاملة</p>
                  <p className="text-sm text-muted-foreground">دقة عالية</p>
                </div>
              </div>
            </Card>

            <Card className="absolute -bottom-6 -left-6 p-5 bg-background/95 backdrop-blur-sm shadow-xl border-0 ring-1 ring-border/50">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div className="text-right">
                  <p className="font-semibold text-base">نتائج سريعة</p>
                  <p className="text-sm text-muted-foreground">خلال ساعات</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-4 gap-8 mt-24">
          <div className="text-center group">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-all duration-300">
              <Shield className="w-10 h-10 text-primary" />
            </div>
            <h3 className="font-serif font-semibold text-lg mb-3">
              معايير عالمية
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              نلتزم بأعلى معايير الجودة العالمية
            </p>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-all duration-300">
              <Heart className="w-10 h-10 text-accent" />
            </div>
            <h3 className="font-serif font-semibold text-lg mb-3">
              رعاية متخصصة
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              فريق طبي متخصص ومدرب
            </p>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-all duration-300">
              <Clock className="w-10 h-10 text-primary" />
            </div>
            <h3 className="font-serif font-semibold text-lg mb-3">
              نتائج سريعة
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              الحصول على النتائج في أسرع وقت
            </p>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-all duration-300">
              <Award className="w-10 h-10 text-accent" />
            </div>
            <h3 className="font-serif font-semibold text-lg mb-3">
              خبرة واسعة
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              سنوات من الخبرة في المجال الطبي
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
