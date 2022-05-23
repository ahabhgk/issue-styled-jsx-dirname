function App() {
  return (
    <div className="hello">
      <p>Hello World</p>

      <style jsx>{`
        .hello {
          font: 15px Helvetica, Arial, sans-serif;
          background: #eee;
          padding: 100px;
          text-align: center;
          transition: 100ms ease-in background;
        }
        .hello:hover {
          background: #ccc;
        }
      `}
      </style>
    </div>
  )
}

export default App
