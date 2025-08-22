import Navigation from "/components/navigation";
import Footer from "/components/footer";
import HeroSection from "/components/hero-section";
import ServicesPreview from "/components/services-preview";
import { Card } from "/components/ui/card";
import { Badge } from "/components/ui/badge";
import { Microscope, Clock, Shield, Heart, Users, Award } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        <HeroSection />

        {/* Quick Services Overview */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                خدماتنا الطبية
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                نقدم مجموعة شاملة من الفحوصات الطبية باستخدام أحدث التقنيات
                والمعدات
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Microscope className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  فحوصات الدم
                </h3>
                <p className="text-muted-foreground">
                  فحوصات شاملة للدم تشمل السكر والكوليسترول ووظائف الكبد والكلى
                </p>
              </Card>

              <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  نتائج سريعة
                </h3>
                <p className="text-muted-foreground">
                  نضمن تقديم النتائج في أسرع وقت ممكن مع الحفاظ على الدقة
                </p>
              </Card>

              <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  جودة عالية
                </h3>
                <p className="text-muted-foreground">
                  نلتزم بأعلى معايير الجودة والدقة في جميع فحوصاتنا
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                لماذا تختار مختبر الأقصى؟
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                نتميز بتقديم خدمات طبية متميزة تحت إشراف خبراء متخصصين
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  خبرة 15+ سنة
                </h3>
                <p className="text-sm text-muted-foreground">
                  خبرة واسعة في مجال المختبرات الطبية
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  +10,000 مريض
                </h3>
                <p className="text-sm text-muted-foreground">تم خدمتهم بنجاح</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  رعاية شخصية
                </h3>
                <p className="text-sm text-muted-foreground">
                  اهتمام خاص بكل مريض
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  معايير عالمية
                </h3>
                <p className="text-sm text-muted-foreground">
                  نتبع أحدث المعايير الدولية
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                احجز موعدك اليوم
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                احصل على أفضل رعاية طبية وفحوصات دقيقة في مختبر الأقصى الطبي
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/booking"
                  className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                >
                  احجز موعد
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors"
                >
                  اتصل بنا
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
