# 🚀 Netlify 部署指南

## 方式一：拖拽上传（推荐，30 秒上线）

### 步骤：

1. **打开 Netlify Drop**
   - 访问：https://app.netlify.com/drop
   - 无需登录即可预览

2. **上传网站**
   - 打开 Finder
   - 前往：`/Users/skyhuang/lobsterai/project/finblade-website`
   - 将整个 `finblade-website` 文件夹拖到 Netlify Drop 页面

3. **获取你的网站链接**
   - 上传完成后，你会得到一个链接：`https://random-name-xxxx.netlify.app`
   - 点击即可访问你的网站！

4. **注册账号并保存网站**
   - 点击 "Sign up" 创建免费账号
   - 你的网站会自动保存到账号中

5. **自定义网站名称（可选）**
   - 登录后进入 Site settings → Site details
   - 点击 "Change site name"
   - 输入：`finblade`（如果可用）
   - 你的网站将变为：`https://finblade.netlify.app`

---

## 方式二：Netlify CLI（适合后续更新）

### 安装 Netlify CLI

```bash
# 使用 npm 安装
npm install -g netlify-cli

# 或使用 Homebrew
brew install netlify-cli
```

### 部署步骤

```bash
cd /Users/skyhuang/lobsterai/project/finblade-website

# 登录 Netlify
netlify login

# 初始化新站点
netlify init

# 部署
netlify deploy --prod
```

### 后续更新

```bash
# 每次修改网站后，运行：
git add .
git commit -m "Update website"
netlify deploy --prod
```

---

## 🌐 绑定自定义域名（可选）

### 购买域名推荐：

1. **Namecheap** - https://namecheap.com
   - `finbladeknives.com` ~ $10-12/年
   - `finbladefishing.com` ~ $10-12/年

2. **Google Domains** - https://domains.google
   - 简洁可靠，$12/年

3. **Porkbun** - https://porkbun.com
   - 价格优惠，免费隐私保护

### 绑定步骤：

1. 在 Netlify 进入：Site settings → Domain management
2. 点击 "Add custom domain"
3. 输入你购买的域名（如 `finbladeknives.com`）
4. 按照提示更新 DNS 记录

---

## 💳 添加支付功能

网站已包含订单表单，要实际收款需集成：

### Stripe（推荐）
1. 注册：https://stripe.com
2. 创建 Payment Link
3. 替换 `script.js` 中的 `handleOrder` 函数

### PayPal
1. 创建按钮：https://paypal.com/buttons
2. 复制按钮代码到 `index.html`

### Gumroad（最简单）
1. 注册：https://gumroad.com
2. 创建产品页面
3. 将 CTA 按钮链接到 Gumroad 产品页

---

## 📊 添加统计分析

### Google Analytics

1. 注册：https://analytics.google.com
2. 创建媒体资源，获取跟踪 ID（如 `G-XXXXXXXXXX`）
3. 在 `index.html` 的 `<head>` 中添加：

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## ✅ 部署检查清单

- [ ] 网站已上传到 Netlify
- [ ] 自定义网站名称
- [ ] 测试移动端显示
- [ ] 添加 Google Analytics
- [ ] 集成支付功能
- [ ] 绑定自定义域名（可选）
- [ ] 设置联系邮箱
- [ ] 创建社交媒体账号

---

**需要帮助？** 随时询问！
