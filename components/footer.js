import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
              </div>
              <div className="text-right">
                <h3 className="text-lg font-bold text-foreground">مختبر الأقصى الطبي</h3>
                <p className="text-sm text-muted-foreground">Al-Aqsa Medical Lab</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              مختبر طبي متخصص يقدم أحدث الفحوصات الطبية بأعلى معايير الجودة والدقة. نحن ملتزمون بتقديم خدمة طبية متميزة
              لجميع المرضى.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  عن المختبر
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  الخدمات
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-muted-foreground hover:text-primary transition-colors">
                  الحجز
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  اتصل بنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">معلومات التواصل</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">+970 123 456 789</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">info@alaqsamedical.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">فلسطين، غزة</span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">السبت - الخميس: 8:00 - 20:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">© 2024 مختبر الأقصى الطبي. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}
