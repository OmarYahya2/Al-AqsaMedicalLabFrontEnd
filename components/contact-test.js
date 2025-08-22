"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { sendContactMessage } from "@/lib/api"
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react"

export default function ContactTest() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [result, setResult] = useState(null)

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
    setResult(null)

    try {
      console.log('Sending data:', formData)
      const response = await sendContactMessage(formData)
      console.log('Response:', response)
      
      setResult({
        type: 'success',
        message: 'تم إرسال الرسالة بنجاح!',
        data: response
      })

      // Reset form
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })

    } catch (error) {
      console.error('Error:', error)
      setResult({
        type: 'error',
        message: 'حدث خطأ في إرسال الرسالة',
        error: error.message
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const fillTestData = () => {
    setFormData({
      first_name: 'أحمد',
      last_name: 'محمد',
      email: 'test@example.com',
      phone: '+970123456789',
      subject: 'اختبار النموذج',
      message: 'هذه رسالة اختبار للتأكد من أن النموذج يعمل بشكل صحيح.'
    })
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-center">🧪 اختبار نموذج الاتصال</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="first_name">الاسم الأول *</Label>
              <Input
                id="first_name"
                value={formData.first_name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="last_name">اسم العائلة *</Label>
              <Input
                id="last_name"
                value={formData.last_name}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="email">البريد الإلكتروني *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <Label htmlFor="phone">رقم الهاتف</Label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <Label htmlFor="subject">الموضوع *</Label>
            <Input
              id="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <Label htmlFor="message">الرسالة *</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={4}
            />
          </div>

          <div className="flex gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={fillTestData}
              className="flex-1"
            >
              ملء بيانات اختبار
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  جاري الإرسال...
                </>
              ) : (
                'إرسال الرسالة'
              )}
            </Button>
          </div>
        </form>

        {result && (
          <div className={`mt-4 p-4 rounded-lg ${
            result.type === 'success' 
              ? 'bg-green-50 border border-green-200 text-green-800' 
              : 'bg-red-50 border border-red-200 text-red-800'
          }`}>
            <div className="flex items-center gap-2">
              {result.type === 'success' ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                <AlertCircle className="w-5 h-5" />
              )}
              <span className="font-semibold">{result.message}</span>
            </div>
            
            {result.data && (
              <div className="mt-2 text-sm">
                <pre className="whitespace-pre-wrap">
                  {JSON.stringify(result.data, null, 2)}
                </pre>
              </div>
            )}
            
            {result.error && (
              <div className="mt-2 text-sm">
                <strong>الخطأ:</strong> {result.error}
              </div>
            )}
          </div>
        )}

        <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <h4 className="font-semibold text-blue-800 mb-2">تعليمات الاختبار:</h4>
          <ol className="text-sm text-blue-700 space-y-1 list-decimal list-inside">
            <li>اضغط على "ملء بيانات اختبار" لملء النموذج تلقائياً</li>
            <li>اضغط على "إرسال الرسالة"</li>
            <li>تحقق من أن الرسالة تظهر في Django Admin</li>
            <li>رابط Django Admin: <a href="https://al-aqsabackend-uokt.onrender.com/admin/" target="_blank" className="underline">https://al-aqsabackend-uokt.onrender.com/admin/</a></li>
          </ol>
        </div>
      </CardContent>
    </Card>
  )
}
