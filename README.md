# 🎓 منصة تبادل المهارات | Skills Swap Platform

منصة تعليمية متطورة وشاملة لتبادل المهارات والخبرات باللغة العربية، مبنية بأحدث التقنيات.

![Platform Preview](https://via.placeholder.com/800x400/3B82F6/FFFFFF?text=منصة+تبادل+المهارات)

## ✨ المميزات الرئيسية

### 🔐 نظام المصادقة المتقدم
- **تسجيل دخول متعدد الخيارات**: Google OAuth و Apple ID
- **حماية متقدمة**: NextAuth.js مع JWT tokens
- **إدارة الجلسات**: تتبع النشاط وانتهاء الصلاحية التلقائي

### 📚 إدارة المهارات الذكية
- **50+ مجال تخصص**: من البرمجة إلى الفنون والطبخ
- **مستويات متدرجة**: مبتدئ، متوسط، متقدم، خبير
- **بحث متقدم**: فلترة حسب المهارة، السعر، التقييم، والموقع
- **تصنيفات ديناميكية**: تحديث تلقائي حسب الشعبية

### 💰 نظام الاشتراكات المرن
- **🆓 تجربة مجانية**: 5 ساعات تعلم أسبوعياً
- **📅 اشتراك شهري**: $9.99 - وصول غير محدود
- **📆 اشتراك سنوي**: $99.99 - توفير 17% + مميزات إضافية
- **💳 دفع آمن**: PayPal مع دعم العملات المحلية

### 💬 التواصل التفاعلي
- **دردشة فورية**: رسائل نصية وصوتية ومرئية
- **مكالمات فيديو**: WebRTC للجلسات المباشرة
- **مشاركة الملفات**: دعم الصور والمستندات
- **إشعارات ذكية**: تنبيهات في الوقت الفعلي

### 📊 إحصائيات ولوحات تحكم
- **للمعلمين**: تتبع الأرباح، الطلاب، التقييمات
- **للطلاب**: ساعات التعلم، التقدم، المهارات المكتسبة
- **تحليلات متقدمة**: رسوم بيانية وتقارير مفصلة

### ⭐ نظام التقييم والمراجعات
- **تقييمات متعددة الأبعاد**: معرفة، تواصل، دقة المواعيد
- **مراجعات مفصلة**: تعليقات نصية وتقييمات نجمية
- **نظام ثقة**: تحقق من الهوية وبناء السمعة

## 🛠️ التقنيات المستخدمة

### Frontend
- **⚡ Next.js 14**: App Router مع Server Components
- **⚛️ React 18**: مع Hooks المتقدمة والSuspense
- **🎨 Tailwind CSS**: تصميم responsive ومخصص
- **🎭 Framer Motion**: رسوم متحركة سلسة
- **📱 Headless UI**: مكونات UI accessible

### Backend & Database
- **🗄️ MySQL 8.0**: قاعدة بيانات قوية ومعتمدة
- **🔗 Prisma ORM**: إدارة قاعدة البيانات المتقدمة
- **🔑 NextAuth.js**: مصادقة آمنة ومرنة
- **📡 Socket.io**: اتصالات real-time

### Payments & Integration
- **💳 PayPal API**: معالجة المدفوعات الآمنة
- **📧 Nodemailer**: إرسال الإيميلات
- **🎥 WebRTC**: مكالمات فيديو P2P

### Development Tools
- **📘 TypeScript**: type safety وإنتاجية عالية
- **✅ ESLint**: جودة الكود
- **🎯 Zod**: validation قوية
- **🧪 React Hook Form**: إدارة النماذج

## 🚀 التشغيل السريع

### المتطلبات الأساسية
```bash
Node.js 18.0+
MySQL 8.0+
npm أو yarn
Git
```

### 1️⃣ استنساخ المشروع
```bash
git clone https://github.com/your-username/skills-swap-platform.git
cd skills-swap-platform
```

### 2️⃣ تثبيت المكتبات
```bash
npm install
# أو
yarn install
```

### 3️⃣ إعداد قاعدة البيانات
```sql
-- إنشاء قاعدة بيانات جديدة
CREATE DATABASE skills_swap_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- إنشاء مستخدم (اختياري)
CREATE USER 'skillsswap'@'localhost' IDENTIFIED BY 'strong_password';
GRANT ALL PRIVILEGES ON skills_swap_db.* TO 'skillsswap'@'localhost';
FLUSH PRIVILEGES;
```

### 4️⃣ إعداد متغيرات البيئة
```bash
cp .env.example .env.local
```

املأ الملف `.env.local` بالمعلومات التالية:

```env
# Database
DATABASE_URL="mysql://skillsswap:password@localhost:3306/skills_swap_db"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here" # استخدم: openssl rand -base64 32

# Google OAuth (مطلوب)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# PayPal (مطلوب للمدفوعات)
PAYPAL_CLIENT_ID="your-paypal-client-id"
PAYPAL_CLIENT_SECRET="your-paypal-client-secret"
NEXT_PUBLIC_PAYPAL_CLIENT_ID="your-paypal-client-id"
```

### 5️⃣ إعداد OAuth Providers

#### Google OAuth Setup
1. اذهب إلى [Google Cloud Console](https://console.cloud.google.com/)
2. أنشئ مشروع جديد أو اختر موجود
3. فعل Google+ API
4. أنشئ OAuth 2.0 credentials:
   - **Application type**: Web application
   - **Authorized redirect URIs**: 
     - `http://localhost:3000/api/auth/callback/google`
     - `https://yourdomain.com/api/auth/callback/google` (للإنتاج)

#### PayPal Setup
1. اذهب إلى [PayPal Developer](https://developer.paypal.com/)
2. سجل دخول أو أنشئ حساب
3. أنشئ تطبيق جديد في Sandbox
4. احصل على Client ID و Secret
5. للإنتاج: كرر نفس الخطوات في Live environment

### 6️⃣ تطبيق قاعدة البيانات
```bash
# تطبيق المخطط
npx prisma db push

# (اختياري) إضافة بيانات تجريبية
npx prisma db seed
```

### 7️⃣ تشغيل المشروع
```bash
npm run dev
```

🎉 **المشروع جاهز!** افتح [http://localhost:3000](http://localhost:3000)

## 📁 هيكل المشروع

```
skills-swap-platform/
├── 📁 app/                     # Next.js App Router
│   ├── 📁 api/                # API Routes
│   │   ├── 📁 auth/          # NextAuth endpoints
│   │   ├── 📁 subscriptions/ # معالجة الاشتراكات
│   │   └── 📁 payments/      # معالجة المدفوعات
│   ├── 📁 auth/              # صفحات المصادقة
│   ├── 📁 dashboard/         # لوحة التحكم
│   ├── 📁 skills/            # تصفح المهارات
│   └── 📄 page.tsx           # الصفحة الرئيسية
├── 📁 components/             # مكونات React
│   ├── 📁 layout/            # Header, Footer, Sidebar
│   ├── 📁 ui/                # مكونات UI أساسية
│   ├── 📁 forms/             # نماذج وvalidation
│   └── 📁 home/              # مكونات الصفحة الرئيسية
├── 📁 lib/                   # مكتبات مساعدة
│   ├── 📄 auth.ts            # إعدادات NextAuth
│   ├── 📄 prisma.ts          # Prisma client
│   └── 📄 utils.ts           # وظائف مساعدة
├── 📁 prisma/                # قاعدة البيانات
│   ├── 📄 schema.prisma      # مخطط البيانات
│   └── 📄 seed.ts            # بيانات تجريبية
├── 📁 types/                 # أنواع TypeScript
├── 📁 public/                # ملفات ثابتة
│   ├── 📁 images/            # صور ولوجو
│   └── 📁 icons/             # أيقونات
└── 📁 docs/                  # وثائق المشروع
```

## 🔧 أوامر مفيدة

```bash
# التطوير
npm run dev              # تشغيل بيئة التطوير
npm run build           # بناء للإنتاج
npm run start           # تشغيل الإنتاج
npm run lint            # فحص الكود

# قاعدة البيانات
npx prisma studio       # واجهة إدارة البيانات
npx prisma db push      # تطبيق التغييرات
npx prisma migrate dev  # إنشاء migration
npx prisma generate     # إنشاء Prisma client

# الاختبار والتنظيف
npm run type-check      # فحص TypeScript
npm run format          # تنسيق الكود
npm run clean           # تنظيف الملفات المؤقتة
```

## 🌍 النشر في الإنتاج

### Vercel (الأسهل والموصى به)
1. ارفع الكود إلى GitHub
2. ربط المشروع مع Vercel
3. إضافة متغيرات البيئة
4. النشر التلقائي

### متطلبات الإنتاج
- **قاعدة بيانات**: PlanetScale, AWS RDS, أو Google Cloud SQL
- **تخزين الملفات**: AWS S3, Cloudinary
- **البريد الإلكتروني**: SendGrid, AWS SES
- **المراقبة**: Sentry, LogRocket
- **CDN**: Cloudflare

### إعدادات الأمان
```env
# Production Environment Variables
NEXTAUTH_URL="https://yourdomain.com"
DATABASE_URL="mysql://user:pass@your-db-host:3306/db"
PAYPAL_MODE="live"  # تغيير من sandbox إلى live
```

## 🤝 المساهمة في المشروع

نرحب بالمساهمات من المجتمع! 

### خطوات المساهمة:
1. **Fork** المشروع
2. إنشاء فرع جديد (`git checkout -b feature/amazing-feature`)
3. تطبيق التغييرات (`git commit -m 'Add amazing feature'`)
4. رفع التغييرات (`git push origin feature/amazing-feature`)
5. فتح **Pull Request**

### قواعد المساهمة:
- اتبع معايير TypeScript و ESLint
- أضف اختبارات للميزات الجديدة
- وثق التغييرات في CHANGELOG.md
- استخدم Conventional Commits

## 🐛 الإبلاغ عن المشاكل

إذا واجهت أي مشاكل:
1. تحقق من [الأسئلة الشائعة](docs/FAQ.md)
2. ابحث في [Issues](https://github.com/your-username/skills-swap-platform/issues)
3. أنشئ Issue جديد مع تفاصيل المشكلة

## 📚 الوثائق الإضافية

- [📖 دليل المستخدم](docs/user-guide.md)
- [👩‍💻 دليل المطور](docs/developer-guide.md)
- [🔌 API Documentation](docs/api.md)
- [❓ أسئلة شائعة](docs/faq.md)
- [🚀 دليل النشر](docs/deployment.md)

## 📄 الترخيص

هذا المشروع مرخص تحت رخصة MIT. راجع ملف [LICENSE](LICENSE) للتفاصيل.

## 💬 الدعم والمجتمع

- **البريد الإلكتروني**: support@skillsswap.com
- **تويتر**: [@SkillsSwapAr](https://twitter.com/skillsswapar)
- **ديسكورد**: [انضم للمجتمع](https://discord.gg/skillsswap)

## 🎯 خارطة الطريق

- [ ] **Q1 2024**: تطبيق موبايل (React Native)
- [ ] **Q2 2024**: نظام شهادات ومسارات تعليمية
- [ ] **Q3 2024**: AI للتوصيات الذكية
- [ ] **Q4 2024**: منصة المؤسسات والشركات

---

<div align="center">

**تم تطوير هذا المشروع بـ ❤️ لخدمة المجتمع العربي**

[🌟 ضع نجمة](https://github.com/your-username/skills-swap-platform) • [🐛 أبلغ عن مشكلة](https://github.com/your-username/skills-swap-platform/issues) • [💬 نقاش](https://github.com/your-username/skills-swap-platform/discussions)

</div>