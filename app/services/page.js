import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ServicesPreview from "@/components/services-preview"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Microscope, Clock, Shield, Heart, Users, Award, TestTube, Droplets, Activity, Zap, Stethoscope } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background to-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">خدماتنا الطبية</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                نقدم مجموعة شاملة من الفحوصات الطبية المتخصصة بأحدث التقنيات وأعلى معايير الجودة
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-8 text-center hover:shadow-lg transition-shadow group">
                <div className="w-20 h-20 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Droplets className="w-10 h-10 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">فحص الكوليسترول</h3>
                <p className="text-muted-foreground mb-4">
                  فحص شامل لمستويات الكوليسترول في الدم مع تحليل مفصل للدهون
                </p>
                <Badge className="bg-red-100 text-red-700">نتائج خلال 24 ساعة</Badge>
              </Card>

              <Card className="p-8 text-center hover:shadow-lg transition-shadow group">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TestTube className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">فحص نوع الدم</h3>
                <p className="text-muted-foreground mb-4">
                  تحديد فصيلة الدم وعامل الريسوس بدقة عالية
                </p>
                <Badge className="bg-primary/10 text-primary">نتائج فورية</Badge>
              </Card>

              <Card className="p-8 text-center hover:shadow-lg transition-shadow group">
                <div className="w-20 h-20 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Activity className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">فحص السكر</h3>
                <p className="text-muted-foreground mb-4">
                  قياس مستوى السكر في الدم مع تحليل الهيموغلوبين السكري
                </p>
                <Badge className="bg-green-100 text-green-700">نتائج خلال 4 ساعات</Badge>
              </Card>

              <Card className="p-8 text-center hover:shadow-lg transition-shadow group">
                <div className="w-20 h-20 bg-purple-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-10 h-10 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">وظائف الكبد</h3>
                <p className="text-muted-foreground mb-4">
                  فحص شامل لوظائف الكبد والإنزيمات مع تحليل البروتينات
                </p>
                <Badge className="bg-purple-100 text-purple-700">نتائج خلال 6 ساعات</Badge>
              </Card>

              <Card className="p-8 text-center hover:shadow-lg transition-shadow group">
                <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Stethoscope className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">وظائف الكلى</h3>
                <p className="text-muted-foreground mb-4">
                  تقييم صحة الكلى ووظائفها مع قياس الكرياتينين واليوريا
                </p>
                <Badge className="bg-accent/10 text-accent">نتائج خلال 8 ساعات</Badge>
              </Card>

              <Card className="p-8 text-center hover:shadow-lg transition-shadow group">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">فحوصات شاملة</h3>
                <p className="text-muted-foreground mb-4">
                  باقة متكاملة من الفحوصات الطبية الأساسية
                </p>
                <Badge className="bg-primary/10 text-primary">خصم 20%</Badge>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Our Services */}
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">لماذا تختار خدماتنا؟</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                نتميز بتقديم خدمات طبية متميزة تحت إشراف خبراء متخصصين
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">دقة عالية</h3>
                <p className="text-sm text-muted-foreground">نتائج دقيقة وموثوقة</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">سرعة في النتائج</h3>
                <p className="text-sm text-muted-foreground">أسرع وقت ممكن</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Microscope className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">أحدث التقنيات</h3>
                <p className="text-sm text-muted-foreground">معدات طبية متطورة</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">فريق متخصص</h3>
                <p className="text-sm text-muted-foreground">خبراء في المجال الطبي</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">احجز موعدك اليوم</h2>
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
  )
}
