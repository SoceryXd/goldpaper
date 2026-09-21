import SegmentTemplate from '../segment-template'
import { getSegment } from '@/data/segments'
export default function Page(){ const segment=getSegment('hotelaria')!; return <SegmentTemplate segment={segment}/> }
