import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Code2,
  Database,
  Mail,
  Github,
  Linkedin,
  Download,
  ExternalLink,
  Users,
  Target,
  CheckCircle,
  ArrowRight,
  Smartphone,
  Server,
  GitBranch,
} from "lucide-react"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header/Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                Hola, soy{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Saúl</span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-300 mb-8 leading-relaxed">
                Desarrollador Web Full-Stack | Scrum Master | Apasionado por el desarrollo ágil, la eficiencia del
                código y las soluciones funcionales.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#proyectos">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Target className="mr-2 h-5 w-5" />
                    Ver Proyectos
                  </Button>
                </a>
                <a href="#contacto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Contáctame
                  </Button>
                </a>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1">
                  <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                    <img
                      src="/placeholder.svg?height=300&width=300"
                      alt="Saúl - Desarrollador Full-Stack"
                      className="w-72 h-72 rounded-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center animate-pulse">
                  <Code2 className="h-10 w-10 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Sobre Mí */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Sobre Mí</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-slate-800/80 border-slate-700">
              <CardContent className="p-8">
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  Soy estudiante de <strong className="text-blue-400">Ciencias de la Computación</strong> con
                  experiencia práctica en desarrollo web trabajando con clientes reales como{" "}
                  <strong className="text-red-400">Cruz Roja</strong> y diversos negocios locales. Mi pasión por la
                  tecnología me ha llevado a especializarme en el desarrollo full-stack y la gestión ágil de proyectos.
                </p>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  Mi enfoque se centra en crear soluciones funcionales y eficientes utilizando tecnologías modernas como
                  <strong className="text-green-400"> Next.js</strong>,{" "}
                  <strong className="text-blue-400">Laravel</strong>,<strong className="text-purple-400"> PHP</strong> y{" "}
                  <strong className="text-orange-400">MySQL</strong>. Como Scrum Master, lidero equipos hacia la entrega
                  exitosa de productos de software.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="secondary" className="bg-blue-600/20 text-blue-300">
                    Desarrollo Ágil
                  </Badge>
                  <Badge variant="secondary" className="bg-green-600/20 text-green-300">
                    Soluciones Funcionales
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-600/20 text-purple-300">
                    Liderazgo Técnico
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Habilidades Técnicas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Habilidades Técnicas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Frontend */}
            <Card className="bg-slate-800/80 border-slate-700 hover:border-blue-500/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-blue-400 flex items-center">
                  <Smartphone className="mr-2 h-5 w-5" />
                  Frontend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {["HTML5", "CSS3", "JavaScript", "Next.js", "Tailwind", "Bootstrap"].map((skill) => (
                    <Badge key={skill} variant="outline" className="border-blue-500/30 text-blue-300">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Backend */}
            <Card className="bg-slate-800/80 border-slate-700 hover:border-green-500/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-green-400 flex items-center">
                  <Server className="mr-2 h-5 w-5" />
                  Backend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {["PHP", "Laravel"].map((skill) => (
                    <Badge key={skill} variant="outline" className="border-green-500/30 text-green-300">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Bases de Datos */}
            <Card className="bg-slate-800/80 border-slate-700 hover:border-orange-500/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-orange-400 flex items-center">
                  <Database className="mr-2 h-5 w-5" />
                  Bases de Datos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {["MySQL"].map((skill) => (
                    <Badge key={skill} variant="outline" className="border-orange-500/30 text-orange-300">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Herramientas */}
            <Card className="bg-slate-800/80 border-slate-700 hover:border-purple-500/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-purple-400 flex items-center">
                  <GitBranch className="mr-2 h-5 w-5" />
                  Herramientas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {["Git", "GitHub", "Scrum", "Trello", "VS Code"].map((skill) => (
                    <Badge key={skill} variant="outline" className="border-purple-500/30 text-purple-300">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Proyectos Destacados */}
      <section id="proyectos" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Proyectos Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sistema de Capital Humano */}
            <Card className="bg-slate-800/80 border-slate-700 hover:border-blue-500/50 transition-all duration-300 ">
              <div className="relative">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Sistema de Capital Humano"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-blue-600">PHP + MySQL</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-white">Sistema de Capital Humano</CardTitle>
                <CardDescription className="text-slate-400">
                  Gestión completa de empleados, roles y reportes para optimizar recursos humanos.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 mb-4">
                  <Button 
                    size="sm" 
                    className="bg-blue-600 hover:bg-blue-700" 
                    disabled // <-- Botón "Ver Demo" deshabilitado
                  >
                    <ExternalLink className="mr-1 h-4 w-4" />
                    Ver Demo
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-slate-600 text-slate-300 bg-transparent" 
                    disabled // <-- Botón "Código" deshabilitado
                  >
                    <Github className="mr-1 h-4 w-4" />
                    Código
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Citas Médicas */}
            <Card className="bg-slate-800/80 border-slate-700 hover:border-green-500/50 transition-all duration-300 ">
              <div className="relative">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Sistema de Citas Médicas"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-green-600">PHP + JS</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-white">Citas Médicas</CardTitle>
                <CardDescription className="text-slate-400">
                  Agendamiento inteligente con calendario, validación de horarios y base de datos.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 mb-4">
                  <Button 
                    size="sm" 
                    className="bg-green-600 hover:bg-blue-700" 
                    disabled // <-- Botón "Ver Demo" deshabilitado
                  >
                    <ExternalLink className="mr-1 h-4 w-4" />
                    Ver Demo
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-slate-600 text-slate-300 bg-transparent" 
                    disabled // <-- Botón "Código" deshabilitado
                  >
                    <Github className="mr-1 h-4 w-4" />
                    Código
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Estudio de Fotografía */}
            <Card className="bg-slate-800/80 border-slate-700 hover:border-purple-500/50 transition-all duration-300 ">
              <div className="relative">
                <img
                  src="/estudio.png"
                  alt="Estudio de Fotografía"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-blue-600">HTML + CSS + JS</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-white">Estudio de Fotografía</CardTitle>
                <CardDescription className="text-slate-400">
                  Página informativa elegante con galería interactiva y formulario de contacto.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 mb-4">
                  {/* Botón de Demo con enlace */}
                  <a href="https://saulminoc.github.io/estudio/" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                      <ExternalLink className="mr-1 h-4 w-4" />
                      Ver Demo
                    </Button>
                  </a>
                  {/* Botón de Código con enlace */}
                  <a href="https://github.com/saulminoC/estudio" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                      <Github className="mr-1 h-4 w-4" />
                      Código
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Punto de Venta Barbería */}
            <Card className="bg-slate-800/80 border-slate-700 hover:border-orange-500/50 transition-all duration-300 ">
              <div className="relative">
                <img
                  src="/barberia.png"
                  alt="Punto de Venta Barbería"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-orange-600">Next.js + MySQL</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-white">Punto de Venta para Barbería</CardTitle>
                <CardDescription className="text-slate-400">
                  Control completo de productos, ventas y usuarios con interfaz moderna.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 mb-4">
                  <a href="https://barberia-system-galk8se9a-saulcartel12-gmailcoms-projects.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                      <ExternalLink className="mr-1 h-4 w-4" />
                      Ver Demo
                    </Button>
                  </a>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-slate-600 text-slate-300 bg-transparent" 
                    disabled // <-- Botón "Código" deshabilitado
                  >
                    <Github className="mr-1 h-4 w-4" />
                    Código
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Reservas Barbería */}
            <Card className="bg-slate-800/80 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 ">
              <div className="relative">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Reservas Barbería"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-cyan-600">Next.js + Laravel</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-white">Página de Reservas para Barbería</CardTitle>
                <CardDescription className="text-slate-400">
                  Registro de citas inteligente con control de disponibilidad en tiempo real.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 mb-4">
                  <Button size="sm" className="bg-cyan-600 hover:bg-cyan-700">
                    <ExternalLink className="mr-1 h-4 w-4" />
                    Ver Demo
                  </Button>
                  <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                    <Github className="mr-1 h-4 w-4" />
                    Código
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Scrum Master & Formación */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Scrum Master & Formación</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-slate-800/80 border-slate-700">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center">
                  <Users className="mr-3 h-6 w-6 text-blue-400" />
                  Liderazgo Ágil y Gestión de Equipos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-slate-300 text-lg leading-relaxed">
                  Como <strong className="text-blue-400">Scrum Master certificado</strong>, facilito el desarrollo de
                  software mediante metodologías ágiles, enfocándome en entregas iterativas y la mejora continua del
                  equipo.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-white flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-400" />
                      Experiencia en:
                    </h4>
                    <ul className="space-y-2 text-slate-300">
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4 text-blue-400" />
                        Facilitación de ceremonias Scrum
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4 text-blue-400" />
                        Gestión de backlog y sprints
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4 text-blue-400" />
                        Resolución de impedimentos
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4 text-blue-400" />
                        Coaching de equipos de desarrollo
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-white flex items-center">
                      <Target className="mr-2 h-5 w-5 text-purple-400" />
                      Enfoque en:
                    </h4>
                    <ul className="space-y-2 text-slate-300">
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4 text-purple-400" />
                        Entregas de valor continuo
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4 text-purple-400" />
                        Mejora de procesos de desarrollo
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4 text-purple-400" />
                        Comunicación efectiva del equipo
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4 text-purple-400" />
                        Adaptabilidad y mejora continua
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Contacto</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulario */}
            <Card className="bg-slate-800/80 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Envíame un mensaje</CardTitle>
                <CardDescription className="text-slate-400">
                  ¿Tienes un proyecto en mente? Me encantaría escuchar sobre él.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Input
                    placeholder="Tu nombre"
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Tu email"
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Tu mensaje"
                    rows={5}
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                  />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Mail className="mr-2 h-4 w-4" />
                  Enviar Mensaje
                </Button>
              </CardContent>
            </Card>

            {/* Información de contacto */}
            <div className="space-y-8">
              <Card className="bg-slate-800/80 border-slate-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Conecta conmigo</h3>
                  <div className="space-y-4">
                    <a
                      href="mailto:saul@ejemplo.com"
                      className="flex items-center text-slate-300 hover:text-blue-400 transition-colors"
                    >
                      <Mail className="mr-3 h-5 w-5" />
                      saul.mino@alumno.buap.mx
                    </a>
                    <a
                      href="https://github.com/saulminoC"
                      className="flex items-center text-slate-300 hover:text-blue-400 transition-colors"
                    >
                      <Github className="mr-3 h-5 w-5" />
                      github.com/saul
                    </a>
                    <a
                      href="https://www.linkedin.com/in/sa%C3%BAl-mino-cabrera-451884274/"
                      className="flex items-center text-slate-300 hover:text-blue-400 transition-colors"
                    >
                      <Linkedin className="mr-3 h-5 w-5" />
                      linkedin.com/saul
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Download className="mr-2 h-4 w-4" />
                Descargar CV
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-700">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400">© 2025 Saúl MC. Desarrollado con Next.js y Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
