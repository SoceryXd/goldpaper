import SegmentTemplate from '../segment-template'
import { getSegment } from '@/data/segments'
export default function Page(){ const segment=getSegment('supermercados')!; return <SegmentTemplate segment={segment}/> }
