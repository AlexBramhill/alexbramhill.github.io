export function getCommitHash() {
  if (!process.env.GITHUB_SHA) return 'dev'
  return process.env.GITHUB_SHA;
}
