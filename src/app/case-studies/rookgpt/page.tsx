import Breadcrumb from '@/components/Breadcrumb'
import RookGPTCaseStudy from '@/components/RookGPTCaseStudy'

export default function RookGPTPage() {
  return (
    <div>
      <Breadcrumb 
        items={[
          { name: 'Home', href: '/' },
          { name: 'Case Studies', href: '/#case-studies' },
          { name: 'RookGPT – AI Chess Coach', href: '/case-studies/rookgpt' }
        ]} 
      />
      <RookGPTCaseStudy />
    </div>
  )
}
