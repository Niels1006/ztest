function get_cube(num; ws)
    for i in 1:50
        PlutoBoard.send_to_ws(ws, i / 50)
        sleep(0.05)
    end

    return num^3
end

function gaussian2D(meanX, meanY, sigmaX, sigmaY, rho, samples; ws)
    result = []
    for _ in 1:samples
        u1 = rand()
        u2 = rand()
        z1 = sqrt(-2 * log(u1)) * cos(2 * pi * u2)
        z2 = sqrt(-2 * log(u1)) * sin(2 * pi * u2)

        x = meanX + sigmaX * z1
        y = meanY + sigmaY * (rho * z1 + sqrt(1 - rho^2) * z2)
        push!(result, (round(x, digits=1), round(y, digits=1)))
    end

    return result
end
