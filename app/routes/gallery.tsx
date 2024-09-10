import Hero from '~/components/hero';
import { json, LoaderFunction } from '@remix-run/node';
import { useLoaderData, useFetcher } from '@remix-run/react';
import { createClient, Photo } from 'pexels';
import { useState, useEffect } from 'react';

const client = createClient(
  'ukRn7NirFhEmhkjI3JuqyJ8ckq7vB13NgyGhDqQFK1Hy4J1cTp6E3nrT'
);

type LoaderData = {
  photos: Photo[];
  page: number;
  total_results: number;
};

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get('page') || '1');

  try {
    const query = 'husky';
    const response = await client.photos.search({
      query,
      per_page: 24,
      page,
    });

    if ('error' in response) {
      console.error('Pexels API error:', response.error);
      return json(
        { photos: [], page, total_results: 0 },
        { status: 500 }
      );
    }

    return json<LoaderData>({
      photos: response.photos,
      page,
      total_results: response.total_results,
    });
  } catch (error) {
    console.error('Error fetching images:', error);
    return json(
      { photos: [], page, total_results: 0 },
      { status: 500 }
    );
  }
};

export default function Gallery() {
  const initialData = useLoaderData<LoaderData>();
  const [photos, setPhotos] = useState<Photo[]>(initialData.photos);
  const [page, setPage] = useState(initialData.page);
  const [totalResults, setTotalResults] = useState(
    initialData.total_results
  );
  const [isLoading, setIsLoading] = useState(false);
  const fetcher = useFetcher();

  useEffect(() => {
    if (fetcher.data) {
      const newData = fetcher.data as LoaderData;
      setPhotos((prevPhotos) => [...prevPhotos, ...newData.photos]);
      setPage(newData.page);
      setTotalResults(newData.total_results);
      setIsLoading(false);
    }
  }, [fetcher.data]);

  const loadMore = () => {
    if (!isLoading && photos.length < totalResults) {
      setIsLoading(true);
      fetcher.load(`/gallery?page=${page + 1}`);
    }
  };

  return (
    <div>
      <Hero
        title="Gallery"
        description="Explore our collection of beautiful husky images"
        img="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/03c61bf1-2b1c-4a2f-bb3e-f16dea168d7a/den5nfl-c53ed93f-95f2-42ba-8a57-804968e3fe5c.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAzYzYxYmYxLTJiMWMtNGEyZi1iYjNlLWYxNmRlYTE2OGQ3YVwvZGVuNW5mbC1jNTNlZDkzZi05NWYyLTQyYmEtOGE1Ny04MDQ5NjhlM2ZlNWMuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.qOcf34Fn8_ie5K7SR6M2AeLwbvSKpZ1WUs0vokGEY4o"
      />
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="relative overflow-hidden rounded-lg shadow-lg group"
            >
              <img
                src={photo.src.medium}
                alt={photo.alt || 'husky'}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <p className="text-sm">{photo.photographer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {photos.length < totalResults && (
          <div className="flex justify-center mt-8">
            <button
              onClick={loadMore}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
              disabled={isLoading}
            >
              {isLoading ? 'Loading...' : 'Load More'}
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
