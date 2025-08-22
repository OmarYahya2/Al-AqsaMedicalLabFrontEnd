"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle, AlertCircle, Wifi, WifiOff, RefreshCw } from "lucide-react"
import { testAPIConnection, getAPIInfo } from "@/lib/api"

export default function APIStatus() {
  const [apiStatus, setApiStatus] = useState('checking') // 'checking', 'online', 'offline', 'error'
  const [apiInfo, setApiInfo] = useState(null)
  const [isChecking, setIsChecking] = useState(false)

  const checkAPIStatus = async () => {
    setIsChecking(true)
    try {
      const response = await testAPIConnection()
      if (response.success) {
        setApiStatus('online')
        // Get additional API info
        try {
          const info = await getAPIInfo()
          setApiInfo(info)
        } catch (error) {
          console.error('Error getting API info:', error)
        }
      } else {
        setApiStatus('error')
      }
    } catch (error) {
      setApiStatus('offline')
    } finally {
      setIsChecking(false)
    }
  }

  useEffect(() => {
    checkAPIStatus()
  }, [])

  const getStatusIcon = () => {
    switch (apiStatus) {
      case 'online':
        return <CheckCircle className="w-5 h-5 text-green-600" />
      case 'offline':
        return <WifiOff className="w-5 h-5 text-red-600" />
      case 'error':
        return <AlertCircle className="w-5 h-5 text-yellow-600" />
      default:
        return <RefreshCw className="w-5 h-5 text-gray-600 animate-spin" />
    }
  }

  const getStatusText = () => {
    switch (apiStatus) {
      case 'online':
        return 'متصل'
      case 'offline':
        return 'غير متصل'
      case 'error':
        return 'خطأ في الاتصال'
      default:
        return 'جاري الفحص...'
    }
  }

  const getStatusColor = () => {
    switch (apiStatus) {
      case 'online':
        return 'bg-green-100 text-green-800 border-green-200'
      case 'offline':
        return 'bg-red-100 text-red-800 border-red-200'
      case 'error':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center space-x-2">
          <Wifi className="w-5 h-5" />
          <span>حالة الخادم</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">الحالة:</span>
          <Badge className={getStatusColor()}>
            {getStatusIcon()}
            <span className="mr-2">{getStatusText()}</span>
          </Badge>
        </div>

        {apiInfo && (
          <div className="space-y-2">
            <div className="text-sm">
              <span className="text-muted-foreground">الإصدار:</span>
              <span className="mr-2 font-medium">{apiInfo.version}</span>
            </div>
            <div className="text-sm">
              <span className="text-muted-foreground">الوصف:</span>
              <span className="mr-2 font-medium">{apiInfo.description}</span>
            </div>
          </div>
        )}

        <Button 
          onClick={checkAPIStatus} 
          variant="outline" 
          size="sm" 
          className="w-full"
          disabled={isChecking}
        >
          {isChecking ? (
            <>
              <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
              فحص الاتصال...
            </>
          ) : (
            <>
              <RefreshCw className="w-4 h-4 mr-2" />
              فحص الاتصال
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  )
}
