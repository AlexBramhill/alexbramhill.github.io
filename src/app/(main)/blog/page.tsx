import { PostSummary } from "@/_components/blog/post-previews";
import { getAllPosts } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <div className="flex flex-col gap-20">
      {allPosts.length > 0 && <PostSummary posts={allPosts} />}
    </div>
  );
}
