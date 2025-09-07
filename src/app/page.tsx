import { allImages } from '../lib/images';
import PageClientComponent from './page-client-component';

export default function GalleryPage() {
  return <PageClientComponent images={allImages} />;
}