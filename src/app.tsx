import {Plus, Search, FileDown, MoreHorizontal} from 'lucide-react'
import { Table } from 'phosphor-react'



export function App() {
  return (
    <div className="py-10 space-y-8">
      <div>
        {/* <Header/>
        <Tabs/> */}

      </div>

      <main className="max-w-6wl mx-auto space-y-5">
        <div className="flex items-center">
          <h1 className="text-xl font-bold ">Tags</h1>
          {/* <Button variant="primary">
            <Plus className="size-3"/>
            Create new
          </Button> */}
        </div>

        <div className='flex items-center justify-between'>
          {/* <Input variant="filter">
            <Search className="size-3"/>
            <Control placeholder="Search tags..."/>
          </Input> */}
        </div>

        {/* <Button>
          <FileDown className="size-3/>
          Export
        </Button> */}

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead></TableHead>
              <TableHead>Tag</TableHead>
              <TableHead>Amount of videos</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({length: 10}).map((value, index) => {
              return (
                <TableRow key={index}>
                  <TableCell></TableCell>
                  <TableCell>
                    <div className='flex flex-col gap-0.5'>
                      <span className='font-medium'>React</span>
                      <span className='text-xs text-zinc-500'>46b913ed-2331-43eb-8d72-3a5431b75d55</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-zinc-500">13 video(s)</TableCell>
                  <TableCell className="text-right">
                    <Button size="icon">
                      <MoreHorizontal className='size-4'/>
                    </Button>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>

        <Pagination/>
      </main>


    </div>
  )
}
