import Navigation from "../../components/navigation";
import Footer from "../../components/footer";
import { Card } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Award, Users, Clock, Shield, Microscope, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background to-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                عن مختبر الأقصى الطبي
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                رحلة من التميز والإبداع في مجال الفحوصات الطبية، نقدم خدماتنا
                بأعلى معايير الجودة والدقة
              </p>
            </div>
          </div>
        </section>

        {/* Dr. Munther Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="mb-6">
                  <Badge className="mb-4 bg-primary/10 text-primary">
                    المدير الطبي
                  </Badge>
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    الدكتور منذر يحيى
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    استشاري المختبرات الطبية والتشخيص المخبري
                  </p>
                </div>

                <div className="space-y-6">
                  <p className="text-foreground leading-relaxed">
                    يتمتع الدكتور منذر يحيى بخبرة واسعة تمتد لأكثر من 15 عاماً
                    في مجال المختبرات الطبية والتشخيص المخبري. حاصل على شهادات
                    عالمية في علم الأمراض السريرية والكيمياء الحيوية.
                  </p>

                  <p className="text-foreground leading-relaxed">
                    تخصص الدكتور منذر في تطوير وتحسين أنظمة الجودة في المختبرات
                    الطبية، وقد ساهم في تدريب العديد من الكوادر الطبية المتخصصة
                    في المنطقة.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mt-8">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Award className="w-5 h-5 text-primary" />
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">+15 سنة خبرة</p>
                        <p className="text-sm text-muted-foreground">
                          في المختبرات الطبية
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                        <Users className="w-5 h-5 text-secondary" />
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">+10,000 مريض</p>
                        <p className="text-sm text-muted-foreground">
                          تم خدمتهم بنجاح
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div className="aspect-square bg-card rounded-2xl p-8 shadow-lg">
                    <img
                      src="/professional-doctor.png"
                      alt="الدكتور منذر يحيى"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>

                  {/* Floating Achievement Card */}
                  <Card className="absolute -bottom-6 -right-6 p-4 bg-white shadow-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Microscope className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">شهادات عالمية</p>
                        <p className="text-xs text-muted-foreground">
                          في التشخيص المخبري
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Laboratory Mission */}
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                رسالتنا ورؤيتنا
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                نسعى لتقديم خدمات طبية متميزة تساهم في الحفاظ على صحة المجتمع
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    رسالتنا
                  </h3>
                </div>
                <p className="text-foreground leading-relaxed text-center">
                  تقديم فحوصات طبية دقيقة وموثوقة باستخدام أحدث التقنيات
                  والمعدات الطبية، مع الالتزام بأعلى معايير الجودة والسلامة
                  لخدمة المرضى وتلبية احتياجاتهم الصحية.
                </p>
              </Card>

              <Card className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    رؤيتنا
                  </h3>
                </div>
                <p className="text-foreground leading-relaxed text-center">
                  أن نكون المختبر الطبي الرائد في المنطقة، معروفين بالتميز في
                  الخدمة والدقة في النتائج، ونساهم في تطوير القطاع الصحي من خلال
                  الابتكار والتطوير المستمر.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Values and Achievements */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                قيمنا ومبادئنا
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                نلتزم بمجموعة من القيم الأساسية التي توجه عملنا وتضمن تقديم أفضل
                الخدمات
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  الدقة والجودة
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  نضمن أعلى مستويات الدقة في جميع الفحوصات باستخدام أحدث
                  التقنيات والمعايير العالمية
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  السرعة والكفاءة
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  نقدم النتائج في أسرع وقت ممكن دون التنازل عن الدقة والجودة
                  المطلوبة
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  الرعاية الشخصية
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  نهتم بكل مريض كفرد ونقدم له الرعاية والاهتمام الشخصي الذي
                  يستحقه
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <p className="text-muted-foreground">سنة من الخبرة</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">
                  10,000+
                </div>
                <p className="text-muted-foreground">مريض راضٍ</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <p className="text-muted-foreground">نوع فحص طبي</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">99%</div>
                <p className="text-muted-foreground">دقة النتائج</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
