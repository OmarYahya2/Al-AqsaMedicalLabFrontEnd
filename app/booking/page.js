import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Clock, User, Phone, Mail, MapPin, TestTube } from "lucide-react"

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background to-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">احجز موعدك</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                احجز موعدك بسهولة وسرعة للحصول على أفضل رعاية طبية وفحوصات دقيقة
              </p>
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="p-8">
              <CardHeader className="text-center pb-8">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TestTube className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-3xl font-bold text-foreground">نموذج الحجز</CardTitle>
                <p className="text-muted-foreground">املأ النموذج التالي لحجز موعدك</p>
              </CardHeader>
              
              <CardContent>
                <form className="space-y-8">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
                      <User className="w-5 h-5 mr-2" />
                      المعلومات الشخصية
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName" className="text-right block mb-2">الاسم الأول</Label>
                        <Input id="firstName" placeholder="أدخل اسمك الأول" className="text-right" required />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-right block mb-2">اسم العائلة</Label>
                        <Input id="lastName" placeholder="أدخل اسم العائلة" className="text-right" required />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-right block mb-2">رقم الهاتف</Label>
                        <Input id="phone" placeholder="أدخل رقم هاتفك" className="text-right" required />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-right block mb-2">البريد الإلكتروني</Label>
                        <Input id="email" type="email" placeholder="أدخل بريدك الإلكتروني" className="text-right" required />
                      </div>
                    </div>
                  </div>

                  {/* Appointment Details */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
                      <Calendar className="w-5 h-5 mr-2" />
                      تفاصيل الموعد
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="date" className="text-right block mb-2">التاريخ المفضل</Label>
                        <Input id="date" type="date" className="text-right" required />
                      </div>
                      <div>
                        <Label htmlFor="time" className="text-right block mb-2">الوقت المفضل</Label>
                        <Select>
                          <SelectTrigger className="text-right">
                            <SelectValue placeholder="اختر الوقت" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="8:00">8:00 صباحاً</SelectItem>
                            <SelectItem value="9:00">9:00 صباحاً</SelectItem>
                            <SelectItem value="10:00">10:00 صباحاً</SelectItem>
                            <SelectItem value="11:00">11:00 صباحاً</SelectItem>
                            <SelectItem value="12:00">12:00 ظهراً</SelectItem>
                            <SelectItem value="14:00">2:00 مساءً</SelectItem>
                            <SelectItem value="15:00">3:00 مساءً</SelectItem>
                            <SelectItem value="16:00">4:00 مساءً</SelectItem>
                            <SelectItem value="17:00">5:00 مساءً</SelectItem>
                            <SelectItem value="18:00">6:00 مساءً</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
                      <TestTube className="w-5 h-5 mr-2" />
                      الخدمات المطلوبة
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="service" className="text-right block mb-2">نوع الفحص</Label>
                        <Select>
                          <SelectTrigger className="text-right">
                            <SelectValue placeholder="اختر نوع الفحص" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="blood-test">فحص الدم الشامل</SelectItem>
                            <SelectItem value="cholesterol">فحص الكوليسترول</SelectItem>
                            <SelectItem value="diabetes">فحص السكر</SelectItem>
                            <SelectItem value="liver">وظائف الكبد</SelectItem>
                            <SelectItem value="kidney">وظائف الكلى</SelectItem>
                            <SelectItem value="blood-type">فحص نوع الدم</SelectItem>
                            <SelectItem value="comprehensive">فحص شامل</SelectItem>
                            <SelectItem value="other">أخرى</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="urgency" className="text-right block mb-2">مستوى الأولوية</Label>
                        <Select>
                          <SelectTrigger className="text-right">
                            <SelectValue placeholder="اختر الأولوية" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="normal">عادية</SelectItem>
                            <SelectItem value="urgent">عاجلة</SelectItem>
                            <SelectItem value="emergency">طارئة</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      معلومات إضافية
                    </h3>
                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="notes" className="text-right block mb-2">ملاحظات خاصة</Label>
                        <Textarea 
                          id="notes" 
                          placeholder="أضف أي ملاحظات أو متطلبات خاصة..." 
                          className="text-right min-h-[100px]" 
                        />
                      </div>
                      <div>
                        <Label htmlFor="previous-tests" className="text-right block mb-2">فحوصات سابقة</Label>
                        <Select>
                          <SelectTrigger className="text-right">
                            <SelectValue placeholder="هل لديك فحوصات سابقة؟" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="yes">نعم</SelectItem>
                            <SelectItem value="no">لا</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center pt-6">
                    <Button type="submit" className="px-12 py-4 text-lg bg-primary hover:bg-primary/90">
                      <Calendar className="w-5 h-5 mr-2" />
                      احجز الموعد
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-6">هل تحتاج مساعدة؟</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                فريقنا جاهز لمساعدتك في حجز موعدك والإجابة على جميع استفساراتك
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">اتصل بنا</h3>
                <p className="text-muted-foreground mb-4">+970 123 456 789</p>
                <Button variant="outline">اتصل الآن</Button>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">راسلنا</h3>
                <p className="text-muted-foreground mb-4">info@alaqsamedical.com</p>
                <Button variant="outline">أرسل رسالة</Button>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">زورنا</h3>
                <p className="text-muted-foreground mb-4">شارع الجلاء، غزة</p>
                <Button variant="outline">العنوان</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
