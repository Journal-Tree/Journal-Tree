import Image from 'next/image'
import welcomeBlock from  'Journal-Tree/Journal-Tree/app/journal-tree/src/app/components/welcomeBlock.js'
import './_stylesheet/style.css';  // import the CSS file

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Welcome Bck, Sam</h1>
        <welcomeBlock/>
      </div>
    </main>
  )
}
