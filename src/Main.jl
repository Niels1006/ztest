function main()
	PlutoBoard.load_plugin(Plugin)

	PlutoBoard.initialize("static/index.html", "static/index.css"; fullscreen = true, hide_notebook = false, scripts = ["https://cdn.tailwindcss.com", "https://cdn.jsdelivr.net/npm/echarts/dist/echarts.min.js", "https://cdn.jsdelivr.net/npm/echarts-gl/dist/echarts-gl.min.js"], stylesheets = [])

	#write your code here
end