# Aplicación de Gestión de Pacientes Veterinarios

La Aplicación de Gestión de Pacientes Veterinarios es una aplicación web desarrollada con React que permite gestionar los registros y citas de pacientes en una clínica veterinaria.

## Características

- **Gestión de Pacientes**: Permite la creación, actualización y eliminación de registros de pacientes, incluyendo información como nombre, propietario, email, fecha de alta y síntomas.
- **Listado de Pacientes**: Muestra una lista de todos los pacientes registrados.
- **Notificaciones**: Utiliza `react-toastify` para mostrar notificaciones de éxito o error en las operaciones realizadas.

## Tecnologías Utilizadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **TypeScript**: Un superconjunto de JavaScript que añade tipos estáticos.
- **Zustand**: Biblioteca para la gestión del estado global de la aplicación.
- **React Hook Form**: Biblioteca para manejar formularios en React.
- **React Toastify**: Biblioteca para mostrar notificaciones en la aplicación.
- **Tailwind CSS**: Framework de CSS para diseñar interfaces de usuario de manera rápida y eficiente.
- **Vite**: Herramienta de desarrollo rápida y ligera para proyectos de frontend.

## Instalación

Para instalar y ejecutar la Aplicación de Gestión de Pacientes Veterinarios localmente, sigue estos pasos:

1. Clona el repositorio: `git clone https://github.com/tu-usuario/veterinary-patient.git`
2. Navega al directorio del proyecto: `cd veterinary-patient`
3. Instala las dependencias: `pnpm install`
4. Inicia la aplicación: `pnpm dev`
5. Abre tu navegador y visita `http://localhost:3000` para acceder a la aplicación.

## Estructura del Proyecto

```
Workspace
.vscode/
public/
src/
├── components/
├── interface/
├── store/
├── App.tsx
├── main.tsx
├── index.css
.gitignore
eslint.config.js
index.html
package.json
pnpm-lock.yaml
postcss.config.js
README.md
tailwind.config.js
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts
```
