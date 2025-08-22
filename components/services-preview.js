import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Droplets,
  Heart,
  Activity,
  Zap,
  TestTube,
  Stethoscope,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Droplets,
    title: "فحص الكوليسترول",
    description: "فحص شامل لمستويات الكوليسترول في الدم",
    color: "text-red-500",
    bgColor: "bg-red-50",
  },
  {
    icon: TestTube,
    title: "فحص نوع الدم",
    description: "تحديد فصيلة الدم وعامل الريسوس",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Activity,
    title: "فحص السكر",
    description: "قياس مستوى السكر في الدم",
    color: "text-green-500",
    bgColor: "bg-green-50",
  },
  {
    icon: Heart,
    title: "وظائف الكبد",
    description: "فحص شامل لوظائف الكبد والإنزيمات",
    color: "text-purple-500",
    bgColor: "bg-purple-50",
  },
  {
    icon: Stethoscope,
    title: "وظائف الكلى",
    description: "تقييم صحة الكلى ووظائفها",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Zap,
    title: "فحوصات شاملة",
    description: "باقة متكاملة من الفحوصات الطبية",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            خدماتنا الطبية
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            نقدم مجموعة شاملة من الفحوصات الطبية المتخصصة بأحدث التقنيات وأعلى
            معايير الجودة
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 border-0 ring-1 ring-border/50 hover:ring-primary/20 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader className="text-center pb-4">
                <div
                  className={`w-20 h-20 ${service.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className={`w-10 h-10 ${service.color}`} />
                </div>
                <CardTitle className="text-xl font-serif">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-10 py-4 border border-primary/20 bg-background/50 backdrop-blur-sm text-primary rounded-xl font-medium hover:bg-primary/5 hover:border-primary/40 transition-all duration-300"
          >
            عرض جميع الخدمات
          </Link>
        </div>
      </div>
    </section>
  );
}
