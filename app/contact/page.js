"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Calendar, MessageSquare, NavigationIcon, Building, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { sendContactMessage } from "@/lib/api"
import APIStatus from "@/components/api-status"
import ContactTest from "@/components/contact-test"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', null

  const handleInputChange = (e) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await sendContactMessage(formData)
      setSubmitStatus('success')
      
      // Reset form after successful submission
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)

    } catch (error) {
      setSubmitStatus('error')
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFormValid = formData.first_name && formData.last_name && formData.email && formData.subject && formData.message

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background to-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">اتصل بنا</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                نحن هنا لخدمتك والإجابة على جميع استفساراتك. تواصل معنا بأي طريقة تناسبك
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Details */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">معلومات التواصل</h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    يسعدنا تواصلك معنا في أي وقت. فريقنا جاهز لمساعدتك والإجابة على جميع استفساراتك حول خدماتنا الطبية.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Address */}
                  <Card className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-right flex-1">
                        <h3 className="font-semibold text-foreground mb-2">العنوان</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          شارع الجلاء، بجانب مستشفى الشفاء
                          <br />
                          غزة، فلسطين
                        </p>
                        <Button variant="outline" size="sm" className="mt-3 bg-transparent">
                          <NavigationIcon className="w-4 h-4 mr-2" />
                          عرض على الخريطة
                        </Button>
                      </div>
                    </div>
                  </Card>

                  {/* Phone */}
                  <Card className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-secondary" />
                      </div>
                      <div className="text-right flex-1">
                        <h3 className="font-semibold text-foreground mb-2">الهاتف</h3>
                        <p className="text-muted-foreground mb-2">+970 123 456 789</p>
                        <p className="text-muted-foreground mb-2">+970 987 654 321</p>
                        <Button variant="outline" size="sm">
                          <Phone className="w-4 h-4 mr-2" />
                          اتصل الآن
                        </Button>
                      </div>
                    </div>
                  </Card>

                  {/* Email */}
                  <Card className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-right flex-1">
                        <h3 className="font-semibold text-foreground mb-2">البريد الإلكتروني</h3>
                        <p className="text-muted-foreground mb-2">info@alaqsamedical.com</p>
                        <p className="text-muted-foreground mb-2">results@alaqsamedical.com</p>
                        <Button variant="outline" size="sm">
                          <Mail className="w-4 h-4 mr-2" />
                          أرسل رسالة
                        </Button>
                      </div>
                    </div>
                  </Card>

                  {/* Working Hours */}
                  <Card className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-accent" />
                      </div>
                      <div className="text-right flex-1">
                        <h3 className="font-semibold text-foreground mb-2">ساعات العمل</h3>
                        <p className="text-muted-foreground mb-2">الأحد - الخميس: 8:00 ص - 8:00 م</p>
                        <p className="text-muted-foreground mb-2">الجمعة: 8:00 ص - 2:00 م</p>
                        <p className="text-muted-foreground">السبت: 9:00 ص - 6:00 م</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card className="p-8">
                  <CardHeader className="text-center pb-6">
                    <CardTitle className="text-2xl font-bold text-foreground">أرسل لنا رسالة</CardTitle>
                    <p className="text-muted-foreground">سنرد عليك في أقرب وقت ممكن</p>
                  </CardHeader>
                  <CardContent>
                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                      <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <p className="text-green-800">تم إرسال رسالتك بنجاح! سنرد عليك في أقرب وقت ممكن.</p>
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3">
                        <AlertCircle className="w-5 h-5 text-red-600" />
                        <p className="text-red-800">حدث خطأ في إرسال الرسالة. يرجى المحاولة مرة أخرى.</p>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="first_name" className="text-right block mb-2">الاسم الأول *</Label>
                          <Input 
                            id="first_name" 
                            value={formData.first_name}
                            onChange={handleInputChange}
                            placeholder="أدخل اسمك الأول" 
                            className="text-right" 
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="last_name" className="text-right block mb-2">اسم العائلة *</Label>
                          <Input 
                            id="last_name" 
                            value={formData.last_name}
                            onChange={handleInputChange}
                            placeholder="أدخل اسم العائلة" 
                            className="text-right" 
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="email" className="text-right block mb-2">البريد الإلكتروني *</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="أدخل بريدك الإلكتروني" 
                          className="text-right" 
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="phone" className="text-right block mb-2">رقم الهاتف</Label>
                        <Input 
                          id="phone" 
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="أدخل رقم هاتفك" 
                          className="text-right" 
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="subject" className="text-right block mb-2">الموضوع *</Label>
                        <Input 
                          id="subject" 
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="أدخل موضوع الرسالة" 
                          className="text-right" 
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="message" className="text-right block mb-2">الرسالة *</Label>
                        <Textarea 
                          id="message" 
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="اكتب رسالتك هنا..." 
                          className="text-right min-h-[120px]" 
                          required
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-primary hover:bg-primary/90 disabled:opacity-50"
                        disabled={isSubmitting || !isFormValid}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            جاري الإرسال...
                          </>
                        ) : (
                          <>
                            <MessageSquare className="w-4 h-4 mr-2" />
                            إرسال الرسالة
                          </>
                        )}
                      </Button>
                    </form>

                    {/* API Status Component */}
                    <div className="mt-8 pt-6 border-t border-border">
                      <APIStatus />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Test Section */}
        <section className="py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-6">اختبار النموذج</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                استخدم هذا النموذج لاختبار الاتصال مع الخادم والتأكد من أن البيانات تُحفظ في قاعدة البيانات
              </p>
            </div>
            
            <ContactTest />
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-6">موقعنا</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                يمكنك العثور علينا بسهولة في قلب مدينة غزة، بجانب مستشفى الشفاء
              </p>
            </div>
            
            <div className="bg-muted rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">مختبر الأقصى الطبي</h3>
              <p className="text-muted-foreground mb-6">
                شارع الجلاء، بجانب مستشفى الشفاء<br />
                غزة، فلسطين
              </p>
              <Button variant="outline" className="bg-transparent">
                <MapPin className="w-4 h-4 mr-2" />
                عرض على الخريطة
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
