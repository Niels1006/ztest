module ztest

using PlutoBoard
using HTTP
using HTTP.WebSockets
using JSON
using Sockets

using Plugin

include("Main.jl")
include("Functions.jl")

global global_websocket = nothing

end