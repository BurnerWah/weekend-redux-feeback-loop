export default function CommentsStep() {
  return (
    <div>
      <h2>Any comments you want to leave?</h2>
      <input type="text" placeholder="Comments" data-testid="input" />
      <button data-testid="next">Next</button>
    </div>
  )
}
