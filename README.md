# StackSolver Site

> **Website oficial de StackSolver** - Tu empresa
> **URL**: https://www.stacksolver.tech
> **Última actualización**: 2025-12-09

---

## 📊 Estado Actual

| Aspecto | Estado |
|---------|--------|
| **Framework** | Astro 6.0.0-beta.7 🚀 |
| **react** | 19.2.4 ✅ |
| **Tailwind** | 4.x via Vite |
| **Vulnerabilidades** | ✅ 0 |
| **Deploy** | AWS Amplify |
| **Repositorio** | Joeviv/stacksolver-site |

---

## 🔧 Stack Técnico

- **Framework**: Astro 6.0 Beta
- **UI Library**: React 19.0
- **Styling**: TailwindCSS 4.x
- **Icons**: Heroicons React 2.2
- **SEO**: @astrojs/sitemap 3.6 Beta

---

## 📋 Historial de Cambios

### 2026-02-17
- **Maintenance**: Update to Astro 6.0.0-beta.12.
- **Sitemap**: Update to 3.6.1-beta.3.

### 2026-02-04
- **Maintenance**: Update to Astro 6.0.0-beta.7, React 19.2.4.
- **Config**: Amplify Node.js actualizado a v24.
- **Seguridad**: Implementado CSP Estricto, HTTP Security Headers y checkOrigin
- Actualización a React 19

### 2025-12-08
- Ejecutado `npm audit fix` (4 vulnerabilidades requieren Astro v5)
- Documentación de seguridad creada

---

## 🎯 Próximos Cambios Planificados

- [ ] Verificar Server Islands (Astro 6 Feature)
- [ ] Implementar animaciones de ViewTransitions nativas

---

## ⚙️ Preferencias de Desarrollo

```yaml
Package Manager: pnpm (MANDATORIO)
Astro Version: v6.x Beta
Deployment: AWS Amplify (auto-deploy desde main)
Branch Strategy: main (producción)
```

---

## 🔒 Seguridad

- **GitHub**: Joeviv/stacksolver-site
- **2FA**: ✅ YubiKey + Passkeys
- **Dependabot**: ✅ Activo
- **Hardening**: ✅ CSP + Headers Activos

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
