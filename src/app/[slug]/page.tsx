function SlugPage({ params }: { params: { slug: string } }) {
  return (
    <main>
      <div>
        <p>Slug: {params.slug}</p>
      </div>
    </main>
  );
}

export default SlugPage;
