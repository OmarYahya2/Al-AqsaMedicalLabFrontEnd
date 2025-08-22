"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, MessageSquare, Loader2, CheckCircle, AlertCircle } from "lucide-react"

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
  const [submitStatus, setSubmitStatus] = useState(null)

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
      console.log('Sending data:', formData)
      
      const response = await fetch('https://al-aqsabackend-1-pv0k.onrender.com/api/contact/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      console.log('Response status:', response.status)
      const data = await response.json()
      console.log('Response data:', data)
      
      if (!response.ok) {
        throw new Error(data.message || 'حدث خطأ في إرسال الرسالة')
      }

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
      console.error('Error:', error)
      setSubmitStatus('error')
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
                        <div>
                          <p className="text-green-800 font-semibold">تم إرسال رسالتك بنجاح! 🎉</p>
                        </div>
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3">
                        <AlertCircle className="w-5 h-5 text-red-600" />
                        <div>
                          <p className="text-red-800 font-semibold">حدث خطأ في إرسال الرسالة</p>
                          <p className="text-red-700 text-sm">يرجى المحاولة مرة أخرى</p>
                        </div>
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
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
