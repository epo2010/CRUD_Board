import TopicList from '@/components/TopicList'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold">WebDev Topics</h1>
      <p className="mb-4">MongoDB CRUD Example</p>
      <p>Next-auth 인증</p>
      <TopicList />
    </>
  )
}
