# StackSolver Site

> **Website oficial de StackSolver** - Tu empresa
> **URL**: (por definir con Amplify)
> **Última actualización**: 2025-12-08

---

## 📊 Estado Actual

| Aspecto | Estado |
|---------|--------|
| **Framework** | Astro 4.3.5 |
| **Vulnerabilidades** | ⚠️ 4 (requiere Astro v5) |
| **Deploy** | AWS Amplify |
| **Repositorio** | Joeviv/stacksolver-site |

> [!NOTE]
> Se mantiene en Astro v4 por compatibilidad con paquetes específicos.

---

## 🔧 Stack Técnico

- **Framework**: Astro 4.3.5
- **UI Library**: React 18.2.0
- **Styling**: TailwindCSS 3.4.1
- **Icons**: Heroicons React 2.1.1
- **SEO**: @astrojs/sitemap 3.0.5

---

## 📋 Historial de Cambios

### 2025-12-08
- Ejecutado `npm audit fix` (4 vulnerabilidades requieren Astro v5)
- Documentación de seguridad creada

### (Historial anterior pendiente de documentar)

---

## 🎯 Próximos Cambios Planificados

- [ ] (Por definir)

---

## ⚙️ Preferencias de Desarrollo

```yaml
Package Manager: pnpm (preferido) / npm
Astro Version: v4.x (no actualizar a v5 sin pruebas)
Deployment: AWS Amplify (auto-deploy desde main)
Branch Strategy: main (producción)
```

---

## 🔒 Seguridad

- **GitHub**: Joeviv/stacksolver-site
- **2FA**: ✅ YubiKey + Passkeys
- **Dependabot**: ⏳ Por activar

---

## 📝 Notas Importantes

- Mantener Astro en v4 hasta confirmar compatibilidad con v5
- Usar `pnpm install` para nuevas dependencias
- Correr `npm audit` antes de cada deploy

---

## 🧞 Comandos

```bash
pnpm install        # Instalar dependencias
npm run dev         # Servidor local en localhost:4321
npm run build       # Build de producción
npm run preview     # Preview del build
```
