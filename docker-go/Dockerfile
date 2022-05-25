FROM golang:alpine as builder

WORKDIR /usr/src

COPY teste.go ./

RUN go env -w GO111MODULE=off

RUN go build -v -o /usr/local/bin/app

#stage 2
FROM scratch

WORKDIR /usr/src

COPY --from=builder /usr/local/bin/app .

CMD ["./app"]
