export const ErrorCard = ({ message }: { message: string}) => {
  return (
    <div className="py-2.5 px-3.5 bg-red-500/5 border border-red-500/60 rounded">
      <p className="truncate text-xs text-red-500">{message}</p>
    </div>
  )
}