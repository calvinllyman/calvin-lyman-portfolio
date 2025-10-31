import Breadcrumb from '@/components/Breadcrumb'
import FigmaMakeCaseStudy from '@/components/FigmaMakeCaseStudy'

export default function FigmaMakePage() {
  return (
    <div>
      <Breadcrumb 
        items={[
          { name: 'Home', href: '/' },
          { name: 'Case Studies', href: '/#case-studies' },
          { name: 'Figma Make Design System', href: '/case-studies/figma-make' }
        ]} 
      />
      <FigmaMakeCaseStudy />
    </div>
  )
}
